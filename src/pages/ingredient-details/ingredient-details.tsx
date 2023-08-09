import { FC } from 'react';
import IngredientDetails from '../../components/modal/modal-content/modal-ingredient-details/modal-ingredient-details';
import style from './ingredient-details.module.scss';

const IngredientDetailsPage: FC = () => {
     return (
          <div className={style.background}>
               <div className={style.content}>
                    <div className={`text text_type_main-large`}>Детали ингредиента</div>
                    <IngredientDetails />
               </div>
          </div>
     );
};

export default IngredientDetailsPage;
