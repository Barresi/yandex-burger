import IngredientDetails from './modal-ingredient-details/modal-ingredient-details';
import ModalError from './modal-error/modal-error';
import OrderDetails from './modal-order-details/modal-order-details';

import style from './modal.module.css'
import btn_close from "../../images/modal-crest.png";

const Modal = ({modalData, closeModal}) => {
     let contentModal;
     switch(modalData.modalType) {
          case 'ingredient-details': 
               contentModal = <IngredientDetails dataIngredients={modalData}/> 
               break
          case 'error': 
               contentModal = <ModalError error={modalData}/> 
               break
          case 'order-details':
               contentModal = <OrderDetails />
               break
     } 
     
     return (
          <div className={style.content}>
               <div className={style.top}>
                    {modalData.modalType === 'ingredient-details' ? <div className={`${style.title} text text_type_main-large `}>Детали ингредиента</div> : null}
                    {modalData.modalType === 'order-details' ? <div className={`${style.order_title} text text_type_main-large `}>Заказ оформлен</div> : null}
                    <button className={style.btn_close} onClick={() => closeModal(null)}><img src={btn_close} alt="crest" /></button>
               </div>
               {contentModal}
          </div>
     )
}

export default Modal

