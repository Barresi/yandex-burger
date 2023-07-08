import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import ModalOverlay from "../modal-overlay/modal-overlay";

import style from "./modal.module.css";
import btn_close from "../../../images/modal-crest.png";

const modalRootElement = document.getElementById("modal");

const Modal = ({ modalType, show, onClose, children }) => {
     useEffect(() => {
          const escapeListener = (e) => {
               if (e.key === "Escape") {
                    onClose();
                    console.log(1);
               }
          };
          document.addEventListener("keyup", escapeListener, false);

          document.getElementById("root").classList.add("overflow");

          return () => {
               document.removeEventListener("keyup", escapeListener, false);
               document.getElementById("root").classList.remove("overflow");
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

Modal.propTypes = {
     modalType: PropTypes.oneOf([
          "Детали ингредиента",
          "Заказ оформлен",
          undefined,
     ]).isRequired,
     show: PropTypes.bool.isRequired,
     onClose: PropTypes.func.isRequired,
     children: PropTypes.element.isRequired,
};

export default Modal;
