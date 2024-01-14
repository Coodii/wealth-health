import React from 'react'
import './modal.css'

function Modal({title, content, setModal}) {
  return (
    <div className='modal'>
        <div className='modal_container'>
            <button className='close_modal' onClick={() => {setModal(false);}}>X</button>
            <h3 className='modal_title'>{title}</h3>
            <p className='modal_content'>{content}</p>
        </div>
    </div>
  )
}

export default Modal