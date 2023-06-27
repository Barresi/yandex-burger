import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Tabs from "./tabs/tabs"
import IngredientCard from "./ingredient-card/ingredient-card"
import SkeletonCard from './skeleton-card/skeleton-card';

import style from './burger-ingredients.module.css';

const BurgerIngredients = ({dataIngredients, setModalData, isLoading}) => {
     const bunCards = useMemo( () => {
          if (isLoading) return [];
          return dataIngredients
          .filter(item => item['type'] === "bun")
     }, [dataIngredients, isLoading])

     const sauceCards = useMemo( () => {
          if (isLoading) return [];
          return dataIngredients
          .filter(item => item['type'] === "sauce")
     }, [dataIngredients, isLoading])

     const mainCards = useMemo( () => {
          if (isLoading) return [];
          return dataIngredients
          .filter(item => item['type'] === "main")
     }, [dataIngredients, isLoading])

     return (
          <section className={style.burger_ingredients}>
               {isLoading ? 
                    <Skeleton width={300} height={50} className={`${style.h1} mt-10 mb-5`}/> : 
                    <h1 className={`text text_type_main-large mt-10 mb-5 ${style.h1}`}>Соберите бургер</h1>}
               {isLoading? null : <Tabs className={style.tabs}/>}
               <div className={style.container_ingredients}>
                    <div className="buns mb-10" name='bun'>
                         <h2 className="text text_type_main-medium mb-4">{isLoading ? <Skeleton className={style.skeleton_title}/> : 'Булки'}</h2>
                         <ul className={style.list}>
                              {isLoading ? 
                                    <SkeletonCard cards={3}/> :
                                    bunCards.map(item => <IngredientCard cardInfo={item} key={item._id} setModalData={setModalData} isLoading={isLoading}/>)}
                         </ul>
                    </div>
                    <div className="sauce mb-10">
                         <h2 className="text text_type_main-medium mb-4">{isLoading ? <Skeleton className={style.skeleton_title}/> : 'Соусы'}</h2>
                         <ul className={style.list}>
                              {isLoading ? 
                                    <SkeletonCard cards={4}/> :
                                    sauceCards.map(item => <IngredientCard cardInfo={item} key={item._id} setModalData={setModalData} isLoading={isLoading}/>)}
                         </ul>
                    </div>
                    <div className="main mb-10" name='main'>
                         <h2 className="text text_type_main-medium mb-4">{isLoading ? <Skeleton className={style.skeleton_title}/> : 'Начинки'}</h2>
                         <ul className={style.list}>
                              {isLoading ? 
                                    <SkeletonCard cards={1}/> :
                                    mainCards.map(item => <IngredientCard cardInfo={item} key={item._id} setModalData={setModalData} isLoading={isLoading}/>)}
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