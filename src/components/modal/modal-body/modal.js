import { useEffect } from "react";

import ModalOverlay from "../modal-overlay/modal-overlay";

import style from "./modal.module.css";
import btn_close from "../../../images/modal-crest.png";

const Modal = ({ modalType, setIsActiveModal, children }) => {
     const escapeListener = (e) => {
          if (e.key === "Escape") {
               setIsActiveModal(false);
          }
     };

     useEffect(() => {
          document.addEventListener("keyup", escapeListener, false);

          return () => {
               document.removeEventListener("keyup", escapeListener, false);
          };
     }, [escapeListener]);

     return (
          <ModalOverlay setIsActiveModal={setIsActiveModal}>
               <div className={style.content}>
                    <div className={style.top}>
                         {modalType === "ingredient-details" ? (
                              <div
                                   className={`${style.title} text text_type_main-large `}>
                                   Детали ингредиента
                              </div>
                         ) : null}
                         {modalType === "order-details" ? (
                              <div
                                   className={`${style.order_title} text text_type_main-large `}>
                                   Заказ оформлен
                              </div>
                         ) : null}
                         <button
                              className={style.btn_close}
                              onClick={() => setIsActiveModal(false)}>
                              <img src={btn_close} alt='crest' />
                         </button>
                    </div>
                    {children}
               </div>
          </ModalOverlay>
     );
};

export default Modal;
