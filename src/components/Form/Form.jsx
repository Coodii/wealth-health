import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import departments from '../../assets/department.json'
import states from '../../assets/state.json'
import './form.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modal from '../Modal/Modal';
import { createEmployee } from '../../utility/employeeSlice';
import { useDispatch } from 'react-redux';
import { employee } from '../../models/employee';
import dayjs from 'dayjs';


function Form() {
    
    const [modal, setModal] = useState(false);
    
    const [newEmployee, setNewEmployee] = useState({...employee})
    const [birthDate, setBirthDate] = useState(dayjs())
    const [startDate, setStartDate] = useState(dayjs())
    const dispatch = useDispatch();

    //Handle change on input
    function handleChange(e){
        setNewEmployee({
            ...newEmployee,
        [e.target.id]: e.target.value   
        })
    }

    //handle change for birthdate
    function changeBirthDate(e){
        setBirthDate(e);
        setNewEmployee({
            ...newEmployee,
        birthDate: e.$d.toLocaleDateString()  
        })
    }

    //handle change for startDate
    function changeStartDate(e){
        setStartDate(e);
        setNewEmployee({
            ...newEmployee,
        startDate: e.$d.toLocaleDateString()  
        })
    }


    //handle change for state
    function changeState(e){
        const abbreviationState = states.find((state) => state.name === e.target.value).abbreviation;
        setNewEmployee({
            ...newEmployee,
        [e.target.id]: e.target.value,
        stateAbr : abbreviationState 
        })
        
    }


    //handle submit
    function handleSubmit(e){
        dispatch(
            createEmployee(
            {
                employee : newEmployee
            })
        )
        setModal(true)
        e.preventDefault();
        setNewEmployee({...employee});
    }



  return (
    <div className='form_container'>
        {modal ? <Modal title={'Employee created!'} content={'The employee has been added to the database.'} setModal={setModal}/> : null}
        <form className='form_content' onSubmit={handleSubmit}>
            <div className='identity'>
                    <div className="input-wrapper">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstName" required onChange={handleChange} value={newEmployee.firstName} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastName" required onChange={handleChange} value={newEmployee.lastName}/>
                    </div>
                    <div className='input-wrapper'>
                    <label htmlFor="birthdate">Birthdate</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker slotProps={{ textField: { size: 'small', required: true} }} format="DD/MM/YYYY" value={birthDate} onChange={(newValue) => changeBirthDate(newValue)}/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="startDate">Start Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker slotProps={{ textField: { size: 'small', required: true } }} format="DD/MM/YYYY" value={startDate} onChange={(newValue) => changeStartDate(newValue)}/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='address'>
                    <div className="input-wrapper">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" onChange={handleChange} value={newEmployee.street} required/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={handleChange} value={newEmployee.city} required/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="state">State</label>
                        <Dropdown className='form_dropdown' listOptions={states} handleChange={changeState} id={'state'} value={newEmployee.state}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input type="text" id="zipcode" onChange={handleChange} value={newEmployee.zipcode} required/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="department">Department</label>
                        <Dropdown className='form_dropdown' listOptions={departments} handleChange={handleChange} id={'department'} value={newEmployee.department}/>
                    </div>
                </div>
                
                <button className="save">SAVE</button>     
        </form>
    </div>
  )
}

export default Form