import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import departments from '../../assets/department.json'
import states from '../../assets/state.json'
import './form.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Modal from '../Modal/Modal';
import { createEmployee } from '../../utility/employeeSlice';
import { useDispatch } from 'react-redux';


function Form() {
    
    const [startDate, setStartDate] = useState(dayjs());
    const [birthDate, setBirthDate] = useState(dayjs());
    const [openModal, setModal] = useState(false);
    const [form, setForm] = useState ({
        firstName: "",
        lastName: "",
        startDate: "",
        birthDate: "",
        street: "",
        city:"",
        state:states[0].name,
        zipcode:"",
        department:departments[0].name
    })
    const dispatch = useDispatch();


    function handleChange(e){
        setForm({
            ...form,
        [e.target.id]: e.target.value,
        startDate: startDate.$d.toLocaleDateString(),
        birthDate: birthDate.$d.toLocaleDateString(),     
        })
    }

    function handleSubmit(e){
        console.log(form);
        dispatch(
            createEmployee(
            {
                employee : form
            })
        )
        setModal(true)
        e.preventDefault();
    }



  return (
    <div className='form_container'>
        {openModal ? <Modal content={'Employee created'} closeModal={setModal}/> : null}
        <form className='form_content' onSubmit={handleSubmit}>
            <div className='identity'>
                    <div className="input-wrapper">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstName" onChange={handleChange} required/>
                    </div>
                    <div className='line'></div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastName" required onChange={handleChange}/>
                    </div>
                    <div className='line'></div>
                    <div className='input-wrapper'>
                    <label htmlFor="birthdate">Birthdate</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker slotProps={{ textField: { size: 'small', required: true } }} format="DD/MM/YYYY" value={birthDate} onChange={(newValue) => setBirthDate(newValue)}/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='line'></div>
                    <div className='input-wrapper'>
                        <label htmlFor="startDate">Start Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker slotProps={{ textField: { size: 'small', required: true } }} format="DD/MM/YYYY" value={startDate} onChange={(newValue) => setStartDate(newValue)}/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='line'></div>
                </div>
                <div className='address'>
                    <div className="input-wrapper">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" onChange={handleChange} required/>
                    </div>
                    <div className='line'></div>
                    <div className="input-wrapper">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={handleChange} required/>
                    </div>
                    <div className='line'></div>
                    <div className="input-wrapper">
                        <label htmlFor="state">State</label>
                        <Dropdown className='form_dropdown' listOptions={states} handleChange={handleChange} id={'state'}/>
                    </div>
                    <div className='line'></div>
                    <div className="input-wrapper">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input type="text" id="zipcode" onChange={handleChange} required/>
                    </div>
                    <div className='line'></div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="department">Department</label>
                    <Dropdown className='form_dropdown' listOptions={departments} handleChange={handleChange} id={'department'}/>
                </div>
                <button className="save">SAVE</button>         
        </form>
    </div>
  )
}

export default Form