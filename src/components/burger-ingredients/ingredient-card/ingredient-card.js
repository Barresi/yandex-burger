import { useState } from "react";
import { createPortal } from "react-dom";

import {
     CurrencyIcon,
     Counter,
     Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../../modal/modal-body/modal";
import IngredientDetails from "../../modal/modal-content/modal-ingredient-details/modal-ingredient-details";

import style from "./ingredient-card.module.css";
import ingredientPropTypes from "../../app/utils/prop-types";

const IngredientCard = ({ cardInfo }) => {
     const [isActiveModal, setIsActiveModal] = useState(false);
     return (
          <div
               className={style.ingredient_card}
               onClick={() => {
                    setIsActiveModal(true);
               }}>
               <img
                    src={cardInfo["image"]}
                    alt='bun'
                    className={style.img_ingredient}
               />
               <div className={`${style.price} text text_type_digits-default`}>
                    {cardInfo.price}
                    <CurrencyIcon type='primary' />
               </div>
               <div className={`${style.title} text text_type_main-default`}>
                    {cardInfo.name}
               </div>
               {cardInfo.__v ? (
                    <Counter
                         count={cardInfo.__v}
                         size='default'
                         extraClass='m-1'
                    />
               ) : null}
               <Button htmlType='button' type='secondary' size='small'>
                    Добавить
               </Button>
               {isActiveModal
                    ? createPortal(
                           <Modal
                                modalType='ingredient-details'
                                setIsActiveModal={setIsActiveModal}>
                                <IngredientDetails data={cardInfo} />
                           </Modal>,
                           document.querySelector("#modal")
                      )
                    : null}
          </div>
     );
};

IngredientCard.propTypes = {
     cardInfo: ingredientPropTypes.isRequired,
};

export default IngredientCard;
