import React from 'react'
import './modal.css'

function Modal({content, closeModal}) {
  return (
    <div className='modal'>
        <div className='modal_container'>
            <button className='close_modal' onClick={() => {closeModal(false); window.location.reload(false);}}>X</button>
            <div className='modal_content'>{content}</div>
        </div>
    </div>
  )
}

export default Modal