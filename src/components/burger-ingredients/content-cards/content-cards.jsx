import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SkeletonCard from "../skeleton-card/skeleton-card";
import IngredientCard from "../ingredient-card/ingredient-card";
import style from "./content-cards.module.scss";
import {
     deleteError,
     getDataIngredients,
} from "../../../services/ingredients-data/ingredients-data";
import Modal from "../../modal/modal-body/modal";
import ModalError from "../../modal/modal-content/modal-error/modal-error";

const ContentCards = () => {
     const dispatch = useDispatch();
     const { ingredients, error, isLoading } = useSelector(
          (store) => store.ingredients
     );

     useEffect(() => {
          dispatch(getDataIngredients());
     }, [dispatch]);

     const { bunCards, sauceCards, mainCards } = useMemo(
          () => ({
               bunCards: ingredients.filter((item) => item.type === "bun"),
               sauceCards: ingredients.filter((item) => item.type === "sauce"),
               mainCards: ingredients.filter((item) => item.type === "main"),
          }),
          [ingredients, isLoading]
     );

     return (
          <div className={style.containerIngredients}>
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
               {error ? (
                    <Modal
                         onClose={() => {
                              dispatch(deleteError());
                         }}>
                         <ModalError error={error} />
                    </Modal>
               ) : null}
          </div>
     );
};

export default ContentCards;