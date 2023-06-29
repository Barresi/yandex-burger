import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { createPortal } from "react-dom";

import {
     Button,
     ConstructorElement,
     CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal-body/modal";
import OrderDetails from "../modal/modal-content/modal-order-details/modal-order-details";

import style from "./burger-constructor.module.css";
import SkeletonConstructor from "./skeleton-constructor/skeleton-constructor";

const BurgerConstructor = ({ isLoading }) => {
     const [isActiveModal, setIsActiveModal] = useState(false);

     return (
          <section className={style.burger_constructor}>
               {isLoading ? (
                    <SkeletonConstructor count={6} />
               ) : (
                    <>
                         <ConstructorElement
                              type='top'
                              isLocked={true}
                              text='Краторная булка N-200i (верх)'
                              price={200}
                              thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
                         />
                         <div className={style.wrap}>
                              <ConstructorElement
                                   text='Говяжий метеорит (отбивная)'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/meat-04.png'
                              />
                              <ConstructorElement
                                   text='Соус Spicy-X'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sauce-02.png'
                              />
                              <ConstructorElement
                                   text='Плоды Фалленианского дерева'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sp_1.png'
                              />
                              <ConstructorElement
                                   text='Говяжий метеорит (отбивная)'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/meat-04.png'
                              />
                              <ConstructorElement
                                   text='Плоды Фалленианского дерева'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sp_1.png'
                              />
                              <ConstructorElement
                                   text='Плоды Фалленианского дерева'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sp_1.png'
                              />
                              <ConstructorElement
                                   text='Плоды Фалленианского дерева'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sp_1.png'
                              />
                              <ConstructorElement
                                   text='Плоды Фалленианского дерева'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sp_1.png'
                              />
                              <ConstructorElement
                                   text='Плоды Фалленианского дерева'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sp_1.png'
                              />
                              <ConstructorElement
                                   text='Плоды Фалленианского дерева'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sp_1.png'
                              />
                              <ConstructorElement
                                   text='Плоды Фалленианского дерева'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sp_1.png'
                              />
                              <ConstructorElement
                                   text='Плоды Фалленианского дерева'
                                   price={200}
                                   thumbnail='https://code.s3.yandex.net/react/code/sp_1.png'
                              />
                         </div>
                         <ConstructorElement
                              type='bottom'
                              isLocked={true}
                              text='Краторная булка N-200i (низ)'
                              price={200}
                              thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
                         />
                    </>
               )}

               <div className={style.checkout}>
                    {isLoading ? (
                         <Skeleton className={style.skeleton_btn} />
                    ) : (
                         <>
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
                         </>
                    )}
               </div>
               {isActiveModal
                    ? createPortal(
                           <Modal
                                modalType='order-details'
                                setIsActiveModal={setIsActiveModal}>
                                <OrderDetails></OrderDetails>
                           </Modal>,
                           document.querySelector("#modal")
                      )
                    : null}
          </section>
     );
};

BurgerConstructor.propTypes = {
     isLoading: PropTypes.bool.isRequired,
};

export default BurgerConstructor;
