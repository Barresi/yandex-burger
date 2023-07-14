import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import style from './app.module.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
     return (
          <div className={style.app}>
               <AppHeader />
               <DndProvider backend={HTML5Backend}>
                    <main className={style.main}>
                         <BurgerIngredients />
                         <BurgerConstructor />
                    </main>
               </DndProvider>
          </div>
     );
};

export default App;
