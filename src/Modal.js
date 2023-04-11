import React from 'react'
import { FaTimes } from 'react-icons/fa'

import { useGlobalContext } from './context'

const Modal = () => {
  // 调用 useGlobalContext;
  // 然后将 state 与 close function 注入；
  // 最后使用 Ternary Operator 调整 className
  const data = useGlobalContext();
  const {showModal, closeModal} = data;

  return <div className={`${showModal ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
    <div className='modal-container'>
      <h3>modal content</h3>
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal
