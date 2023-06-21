import React from "react";

import { CurrencyIcon , Counter, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import style from './ingredient-card.module.css';

const IngredientCard = ({cardInfo}) => {
     return (
          <div className={style.ingredientCard}>
               <img src={cardInfo['image']} alt="bun" className={style.imgIngredient}/>
               <div className={`${style.price} text text_type_digits-default`}> 
                    {cardInfo.price}
                    <CurrencyIcon type="primary" />
               </div>
               <div className={`${style.title} text text_type_main-default`}>{cardInfo.name}</div>
               {cardInfo.__v ? <Counter count={cardInfo.__v} size="default" extraClass="m-1" /> : null}
               <Button htmlType="button" type="secondary" size="small">Добавить</Button>
          </div>
     )
}

export default IngredientCard;