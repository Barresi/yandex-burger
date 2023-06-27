import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

import style from './modal-overlay.module.css'

const ModalOverlay = ({children, closeModal}) => {
     const overlay = useRef();

     const closeModalClick = (e) => {
          if (e.target === overlay.current) {
               closeModal(null)
          }
     }

     useEffect(() => {
          document.addEventListener('keyup', (e) => {
               if (e.key === 'Escape') {
                    closeModal(null)
               }
          })
     }) 

     return (
          <div className={style.overlay} onClick={closeModalClick} ref={overlay}>
               {children}
          </div>
     )
}

ModalOverlay.propTypes = {
     children: PropTypes.element.isRequired,
     closeModal: PropTypes.func.isRequired,
}

export default ModalOverlay;