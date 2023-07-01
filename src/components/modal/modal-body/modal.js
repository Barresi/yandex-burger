import { useEffect } from "react";
import { createPortal } from "react-dom";

import ModalOverlay from "../modal-overlay/modal-overlay";

import style from "./modal.module.css";
import btn_close from "../../../images/modal-crest.png";

const modalRootElement = document.getElementById("modal");

const Modal = ({ modalType, show, onClose, children }) => {
     useEffect(() => {
          const escapeListener = (e) => {
               if (e.key === "Escape") {
                    onClose();
               }
          };

          document.addEventListener("keyup", escapeListener, false);

          return () => {
               document.removeEventListener("keyup", escapeListener, false);
          };
     }, []);

     return show
          ? createPortal(
                 <div className={style.modal}>
                      <div className={style.content}>
                           <div className={style.top}>
                                <div
                                     className={`${style.order_title} text text_type_main-large `}>
                                     {modalType}
                                </div>

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
            )
          : null;
};

export default Modal;
