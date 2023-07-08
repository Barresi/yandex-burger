import { useMemo, useContext } from "react";
import PropTypes from "prop-types";
import SkeletonCard from "../skeleton-card/skeleton-card";

import IngredientCard from "../ingredient-card/ingredient-card";
import { DataBurgersContext } from "../../app/utils/context/data-burgers-context";

import style from "./content-cards.module.css";

const ContentCards = ({ isLoading, refActiveTabs }) => {
     const dataIngredients = useContext(DataBurgersContext);
     const { refBun, refSauce, refMain } = refActiveTabs;

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
          <div className={style.container_ingredients}>
               <div className='buns mb-10' name='bun'>
                    <h2
                         className='text text_type_main-medium mb-4'
                         ref={refBun}>
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
                    <h2
                         className='text text_type_main-medium mb-4'
                         ref={refSauce}>
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
               <div className='main' name='main'>
                    <h2
                         className='text text_type_main-medium mb-4'
                         ref={refMain}>
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
     );
};

ContentCards.propTypes = {
     isLoading: PropTypes.bool.isRequired,
     refActiveTabs: PropTypes.object.isRequired,
};

export default ContentCards;
