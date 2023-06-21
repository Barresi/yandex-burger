import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor'

import data from './utils/data';

import style from './App.module.css';

function App() {
     return (
          <div className={style.app}>
               <AppHeader activePage='constructorPage' />
               <main className={style.main}>
                    <BurgerIngredients dataIngredients={data}/>
                    <BurgerConstructor />
               </main>
          </div>  
     );
}

export default App;
