import React from 'react'
import './dropdown.css'
function Dropdown({listOptions, handleChange, id, value}) {
  return (
        <select className='select' id={id} onChange={handleChange} value={value}>
            {listOptions.map((listValue) =>
                <option key={listValue.id}>{listValue.name}</option>
            )};
        </select>
  )
}

export default Dropdown