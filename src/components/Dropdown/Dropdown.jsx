import React from 'react'
import './dropdown.css'
function Dropdown({listOptions, handleChange, id}) {
  return (
        <select className='select' id={id} onChange={handleChange}>
            {listOptions.map((value) =>
                <option key={value.id}>{value.name}</option>
            )};
        </select>
  )
}

export default Dropdown