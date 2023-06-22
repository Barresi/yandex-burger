import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Tabs from "./tabs/tabs"
import IngredientCard from "./ingredient-card/ingredient-card"

import style from './burger-ingredients.module.css';

const BurgerIngredients = ({dataIngredients}) => {
     const bunCards = useMemo( () => {
          return dataIngredients
          .filter(item => item['type'] === "bun")
          .map(item => <IngredientCard cardInfo={item} key={item._id}/>)
     }, [dataIngredients])

     const sauceCards = useMemo( () => {
          return dataIngredients
          .filter(item => item['type'] === "sauce")
          .map(item => <IngredientCard cardInfo={item} key={item._id}/>)
     }, [dataIngredients])

     const mainCards = useMemo( () => {
          return dataIngredients
          .filter(item => item['type'] === "main")
          .map(item => <IngredientCard cardInfo={item} key={item._id}/>)
     }, [dataIngredients])

     return (
          <section className={style.burger_ingredients}>
               <h1 className={`text text_type_main-large pt-10 pb-5 ${style.h1}`}>Соберите бургер</h1>
               <Tabs className={style.tabs}/>
               <div className={style.container_ingredients}>
                    <div className="buns mb-10" name='bun'>
                         <h2 className="text text_type_main-medium mb-4">Булки</h2>
                         <ul className={style.list}>
                              {bunCards}
                         </ul>
                    </div>
                    <div className="sauce mb-10">
                         <h2 className="text text_type_main-medium mb-4">Соусы</h2>
                         <ul className={style.list}>
                              {sauceCards}
                         </ul>
                    </div>
                    <div className="main mb-10" name='main'>
                         <h2 className="text text_type_main-medium mb-4">Начинки</h2>
                         <ul className={style.list}>
                              {mainCards}
                         </ul>
                    </div>
               </div>
               <div className={style.checkout}>
                    <div className={`${style.price} text text_type_digits-default`}>420 <CurrencyIcon type="primary" /></div>
                    <Button htmlType="button" type="primary" size="small" extraClass="ml-2">Смотреть заказ</Button>
               </div>
          </section>
     )
}

const objPropTypes = PropTypes.shape({
     _id: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired,
     proteins: PropTypes.number.isRequired,
     fat: PropTypes.number.isRequired,
     carbohydrates: PropTypes.number.isRequired,
     calories: PropTypes.number.isRequired,
     price: PropTypes.number.isRequired,
     image: PropTypes.string.isRequired,
     image_mobile: PropTypes.string.isRequired,
     image_large: PropTypes.string.isRequired,
     __v: PropTypes.number.isRequired,
});

BurgerIngredients.propTypes = {
     dataIngredients: PropTypes.arrayOf(objPropTypes).isRequired
}

export default BurgerIngredients;