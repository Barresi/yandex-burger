import { useState } from "react";

import {
     Button,
     ConstructorElement,
     CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal-body/modal";
import OrderDetails from "../modal/modal-content/modal-order-details/modal-order-details";

import ingredientPropTypes from "../app/utils/prop-types";
import style from "./burger-constructor.module.css";

const BurgerConstructor = () => {
     const [isActiveModal, setIsActiveModal] = useState(false);

     return (
          <section className={style.burger_constructor}>
               <ConstructorElement
                    type='top'
                    isLocked={true}
                    text='Краторная булка N-200i (верх)'
                    price={200}
                    thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
               />
               <div className={style.wrap}>
                    {Array(8)
                         .fill(0)
                         .map((item, ind) => (
                              <ConstructorElement
                                   text='Говяжий метеорит (отбивная)'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/meat-04.png'
                              />
                         ))}
               </div>
               <ConstructorElement
                    type='bottom'
                    isLocked={true}
                    text='Краторная булка N-200i (низ)'
                    price={200}
                    thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
               />

               <div className={style.checkout}>
                    <div
                         className={`text text_type_digits-medium ${style.price}`}>
                         610 <CurrencyIcon type='primary' />
                    </div>
                    <Button
                         htmlType='button'
                         type='primary'
                         size='medium'
                         onClick={() => setIsActiveModal(true)}>
                         Оформить заказ
                    </Button>
               </div>

               <Modal
                    modalType='Заказ оформлен'
                    show={isActiveModal}
                    onClose={() => setIsActiveModal(false)}>
                    <OrderDetails />
               </Modal>
          </section>
     );
};

BurgerConstructor.propTypes = {
     ingredient: ingredientPropTypes.isRequired,
};

export default BurgerConstructor;
