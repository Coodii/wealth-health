import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faFileLines } from '@fortawesome/free-regular-svg-icons'
import './header.css'

function Header() {
  return (
    <header>
        <Link to='/' className='home_link'>HRnet</Link>
        <div className='navbar'>
            <Link to='/create-employee' className='navbar_link'><FontAwesomeIcon className='navbar_logo' icon={faIdBadge}/>Create Employee</Link>
            <Link to='/employees-list' className='navbar_link'><FontAwesomeIcon className='navbar_logo' icon={faFileLines}/>Employee List</Link>
        </div>
    </header>
  )
}

export default Header