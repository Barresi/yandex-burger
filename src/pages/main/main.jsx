import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import style from './main.module.scss';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
     return (
          <>
               <DndProvider backend={HTML5Backend}>
                    <main className={style.main}>
                         <BurgerIngredients />
                         <BurgerConstructor />
                    </main>
               </DndProvider>
               <Outlet />
          </>
     );
};

export default MainPage;
