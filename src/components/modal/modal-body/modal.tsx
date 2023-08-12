import { FC, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import style from './modal.module.scss';
import btn_close from '../../../images/modal-crest.png';

const modalRootElement = document.getElementById('modal') as HTMLDivElement;

interface IModal {
     modalType?: string | null;
     onClose: () => void;
}

const Modal: FC<PropsWithChildren<IModal>> = ({ modalType, onClose, children }) => {
     const escapeListener = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
               onClose();
          }
     };

     useEffect(() => {
          document.addEventListener('keyup', escapeListener, false);
          document.getElementById('root')?.classList.add('overflow');

          return () => {
               document.removeEventListener('keyup', escapeListener, false);
               document.getElementById('root')?.classList.remove('overflow');
          };
          // eslint-disable-next-line
     }, []);

     return createPortal(
          <div className={style.modal}>
               <div className={style.content}>
                    <div className={style.top}>
                         <div className={`${style.order_title} text text_type_main-large `}>{modalType}</div>

                         <button
                              className={style.btn_close}
                              onClick={(e) => {
                                   onClose();
                                   e.stopPropagation();
                              }}>
                              <img src={btn_close} alt='crest' />
                         </button>
                    </div>
                    {children}
               </div>
               <ModalOverlay onClose={onClose} />
          </div>,
          modalRootElement
     );
};

export default Modal;
