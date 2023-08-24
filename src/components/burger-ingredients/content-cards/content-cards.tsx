import { useMemo, FC } from 'react';
import SkeletonCard from '../skeleton-card/skeleton-card';
import IngredientCard from '../ingredient-card/ingredient-card';
import style from './content-cards.module.scss';
import { deleteError } from '../../../services/slices/ingredients-data/ingredients-data';
import Modal from '../../modal/modal-body/modal';
import ModalError from '../../modal/modal-content/modal-error/modal-error';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux-hook';
import { IIngredientsRefs } from '../../../types/content-ingredients-refs';

const ContentCards: FC<IIngredientsRefs & { getActiveTab: () => void }> = ({
     bunRef,
     saucesRef,
     mainRef,
     getActiveTab,
}) => {
     const dispatch = useAppDispatch();
     const { ingredients, error, isLoading } = useAppSelector((store) => store.ingredients);

     const { bunCards, sauceCards, mainCards } = useMemo(
          () => ({
               bunCards: ingredients.filter((item) => item.type === 'bun'),
               sauceCards: ingredients.filter((item) => item.type === 'sauce'),
               mainCards: ingredients.filter((item) => item.type === 'main'),
          }),
          [ingredients]
     );

     return (
          <div className={style.container_ingredients} onScroll={() => getActiveTab()}>
               <div className='buns mb-10' ref={bunRef}>
                    <h2 className='text text_type_main-medium mb-4'>Булки</h2>
                    <ul className={style.list}>
                         {isLoading ? (
                              <SkeletonCard cards={3} />
                         ) : (
                              bunCards.map((item) => <IngredientCard cardInfo={item} key={item._id} />)
                         )}
                    </ul>
               </div>
               <div className='sauce mb-10' ref={saucesRef}>
                    <h2 className='text text_type_main-medium mb-4'>Соусы</h2>
                    <ul className={style.list}>
                         {isLoading ? (
                              <SkeletonCard cards={4} />
                         ) : (
                              sauceCards.map((item) => <IngredientCard cardInfo={item} key={item._id} />)
                         )}
                    </ul>
               </div>
               <div className='main' ref={mainRef}>
                    <h2 className='text text_type_main-medium mb-4'>Начинки</h2>
                    <ul className={style.list}>
                         {isLoading ? (
                              <SkeletonCard cards={1} />
                         ) : (
                              mainCards.map((item) => <IngredientCard cardInfo={item} key={item._id} />)
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
