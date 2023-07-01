import { useMemo } from "react";
import PropTypes from "prop-types";
import "react-loading-skeleton/dist/skeleton.css";

import {
     Button,
     CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Tabs from "./tabs/tabs";
import IngredientCard from "./ingredient-card/ingredient-card";
import SkeletonCard from "./skeleton-card/skeleton-card";

import style from "./burger-ingredients.module.css";
import ingredientPropTypes from "../app/utils/prop-types";

const BurgerIngredients = ({ dataIngredients, isLoading }) => {
     const bunCards = useMemo(() => {
          return dataIngredients.filter((item) => item["type"] === "bun");
     }, [dataIngredients, isLoading]);

     const sauceCards = useMemo(() => {
          return dataIngredients.filter((item) => item["type"] === "sauce");
     }, [dataIngredients, isLoading]);

     const mainCards = useMemo(() => {
          return dataIngredients.filter((item) => item["type"] === "main");
     }, [dataIngredients, isLoading]);

     return (
          <section className={style.burger_ingredients}>
               <h1
                    className={`text text_type_main-large mt-10 mb-5 ${style.h1}`}>
                    Соберите бургер
               </h1>

               <Tabs className={style.tabs} />
               <div className={style.container_ingredients}>
                    <div className='buns mb-10' name='bun'>
                         <h2 className='text text_type_main-medium mb-4'>
                              Булки
                         </h2>
                         <ul className={style.list}>
                              {isLoading ? (
                                   <SkeletonCard cards={3} />
                              ) : (
                                   bunCards.map((item) => (
                                        <IngredientCard
                                             cardInfo={item}
                                             key={item._id}
                                             isLoading={isLoading}
                                        />
                                   ))
                              )}
                         </ul>
                    </div>
                    <div className='sauce mb-10'>
                         <h2 className='text text_type_main-medium mb-4'>
                              Соусы
                         </h2>
                         <ul className={style.list}>

                              {isLoading ? (
                                   <SkeletonCard cards={4} />
                              ) : (
                                   sauceCards.map((item) => (
                                        <IngredientCard
                                             cardInfo={item}
                                             key={item._id}
                                             isLoading={isLoading}
                                        />
                                   ))
                              )}
                         </ul>
                    </div>
                    <div className='main mb-10' name='main'>
                         <h2 className='text text_type_main-medium mb-4'>
                              Начинки
                         </h2>
                         <ul className={style.list}>
                              {isLoading ? (
                                   <SkeletonCard cards={1} />
                              ) : (
                                   mainCards.map((item) => (
                                        <IngredientCard
                                             cardInfo={item}
                                             key={item._id}
                                             isLoading={isLoading}
                                        />
                                   ))
                              )}
                         </ul>
                    </div>
               </div>
               <div className={style.checkout}>
                    <div
                         className={`${style.price} text text_type_digits-default`}>
                         420 <CurrencyIcon type='primary' />
                    </div>
                    <Button
                         htmlType='button'
                         type='primary'
                         size='small'
                         extraClass='ml-2'>
                         Смотреть заказ
                    </Button>
               </div>
          </section>
     );
};

BurgerIngredients.propTypes = {
     dataIngredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default BurgerIngredients;
