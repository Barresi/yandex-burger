import { useState, useContext, useEffect } from "react";
import { ActiveConstructorIngredients } from "../app/utils/context/active-constructor-ingredients";

import {
     Button,
     CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { postDataIngredients } from "../app/utils/api";
import ContentConstructor from "./content-constructor/content-constructor";
import Modal from "../modal/modal-body/modal";
import OrderDetails from "../modal/modal-content/modal-order-details/modal-order-details";
import ModalError from "../modal/modal-content/modal-error/modal-error";

import style from "./burger-constructor.module.css";

const BurgerConstructor = () => {
     const [isActiveModal, setIsActiveModal] = useState(false);
     const [activeItems, setActiveItems] = useContext(
          ActiveConstructorIngredients
     );
     const [totalPrice, setTotalPrice] = useState(0);

     const [orderCheckout, setOrderCheckout] = useState();
     const [isError, setIsError] = useState(false);

     const checkoutSubmit = () => {
          const data = [
               ...activeItems.ingredients.map((item) => item._id),
               activeItems.bun._id,
          ];

          postDataIngredients({ ingredients: data })
               .then((result) => {
                    setOrderCheckout(result.order.number);
                    setIsActiveModal(true);
               })
               .catch(() => {
                    setIsError(true);
                    setIsActiveModal(true);
               });
     };

     useEffect(() => {
          setTotalPrice(
               activeItems.ingredients.reduce(
                    (acc, curr) => acc + curr.price,
                    0
               ) +
                    activeItems.bun.price * 2
          );
     }, [activeItems]);

     return (
          <section className={style.burger_constructor}>
               <ContentConstructor />

               <div className={style.checkout}>
                    <div
                         className={`text text_type_digits-medium ${style.price}`}>
                         {totalPrice ? totalPrice : 0}
                         <CurrencyIcon type='primary' />
                    </div>
                    <Button
                         htmlType='button'
                         type='primary'
                         size='medium'
                         onClick={checkoutSubmit}>
                         Оформить заказ
                    </Button>
               </div>

               {isActiveModal ? (
                    <Modal
                         modalType={isError ? null : "Заказ оформлен"}
                         show={isActiveModal}
                         onClose={() => {
                              setIsActiveModal(false);
                              setIsError(false);
                         }}>
                         {isError ? (
                              <ModalError />
                         ) : (
                              <OrderDetails order={orderCheckout} />
                         )}
                    </Modal>
               ) : null}
          </section>
     );
};

BurgerConstructor.propTypes = {};

export default BurgerConstructor;
