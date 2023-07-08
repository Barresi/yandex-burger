import { useState } from "react";

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

               {isActiveModal ? (
                    <Modal
                         modalType='Детали ингредиента'
                         show={isActiveModal}
                         onClose={() => setIsActiveModal(false)}>
                         <IngredientDetails data={cardInfo} />
                    </Modal>
               ) : null}
          </div>
     );
};

IngredientCard.propTypes = {
     cardInfo: ingredientPropTypes.isRequired,
};

export default IngredientCard;
