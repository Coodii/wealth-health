import React from 'react'
import './modal.css'
import { useNavigate } from "react-router-dom";

function Modal({content, closeModal}) {
  const navigate = useNavigate();
  return (
    <div className='modal'>
        <div className='modal_container'>
            <button className='close_modal' onClick={() => {closeModal(false);}}>X</button>
            <div className='modal_content'>{content}</div>
        </div>
    </div>
  )
}

export default Modal