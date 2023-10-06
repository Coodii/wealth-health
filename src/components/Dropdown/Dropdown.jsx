import React from 'react'

function Dropdown(optionsList) {
    console.log(optionsList);
  return (
    <div>
        <select>
            {optionsList.map((value) =>
                <option key={value.id}>{value.text}</option>
            )};
        </select>
    </div>
  )
}

export default Dropdown