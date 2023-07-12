import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SkeletonCard from "../skeleton-card/skeleton-card";

import IngredientCard from "../ingredient-card/ingredient-card";

import style from "./content-cards.module.css";
import { getDataIngredients } from "../../../services/ingredients-data/ingredients-data";

const ContentCards = () => {
     const dataIngredients = useSelector(
          (store) => store.ingredients.ingredients
     );
     const isLoading = useSelector((store) => store.ingredients.isLoading);
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getDataIngredients());
     }, [dispatch]);

     const bunCards = useMemo(() => {
          return dataIngredients.filter((item) => item.type === "bun");
     }, [dataIngredients, isLoading]);

     const sauceCards = useMemo(() => {
          return dataIngredients.filter((item) => item.type === "sauce");
     }, [dataIngredients, isLoading]);

     const mainCards = useMemo(() => {
          return dataIngredients.filter((item) => item.type === "main");
     }, [dataIngredients, isLoading]);

     return (
          <div className={style.container_ingredients}>
               <div className='buns mb-10' name='bun'>
                    <h2 className='text text_type_main-medium mb-4'>Булки</h2>
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
                    <h2 className='text text_type_main-medium mb-4'>Соусы</h2>
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
               <div className='main' name='main'>
                    <h2 className='text text_type_main-medium mb-4'>Начинки</h2>
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
     );
};

ContentCards.propTypes = {
     isLoading: PropTypes.bool.isRequired,
     refActiveTabs: PropTypes.object.isRequired,
};

export default ContentCards;
