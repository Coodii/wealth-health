import React, { useEffect, useState } from 'react'
import {department} from  '../../assets/department'
import Dropdown from '../Dropdown/Dropdown'

function Form() {

    
  return (
    <div>
        <form >
                    <div className="input-wrapper">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="birthdate">Birthdate</label>
                        <input type="text" id="birthdate"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="startdate">Start Date</label>
                        <input type="text" id="startdate"/>
                    </div>
                    <div className='address'>
                        <h3>Address</h3>
                        <div className="input-wrapper">
                            <label htmlFor="street">street</label>
                            <input type="text" id="street"/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="city">city</label>
                            <input type="text" id="city"/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="state">state</label>
                            <input type="text" id="state"/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="zipcode">zipcode</label>
                            <input type="text" id="zipcode"/>
                        </div>
                    </div>
                    <Dropdown listOptions={department} />
                    <button className="save">savee</button>

                    
        </form>
    </div>
  )
}

export default Form