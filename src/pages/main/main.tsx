import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import style from './main.module.scss';
import { FC } from 'react';

const MainPage: FC = () => {
     return (
          <>
               <main className={style.main}>
                    <BurgerIngredients />
                    <BurgerConstructor />
               </main>
          </>
     );
};

export default MainPage;
