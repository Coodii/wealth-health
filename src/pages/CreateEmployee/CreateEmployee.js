import React from 'react'
import Header from '../../components/Header/Header'
import Form from '../../components/Form/Form'
import Footer from '../../components/Footer/Footer'
import './createEmployee.css'

function CreateEmployee() {
  return (
    <div>
        <Header/>
        <main className='create_employee'>
          <h2 className='create_employee_title'>Create employee</h2>
          <p className='create-employee_description'>Please fill out the form to register a new employee.</p>
          <Form/>
        </main>
        <Footer/>
    </div>
  )
}

export default CreateEmployee