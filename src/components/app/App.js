import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ModalWindow from '../modals/modal';

import style from './app.module.css';

const url = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {

     const [dataBurgers, setDataBurgers] = React.useState(null);
     const [visibleModal, setVisibleModal] = React.useState(true);

     React.useEffect(() => {
          fetch(url)
               .then(response => response.json())
               .then(data => setDataBurgers(data.data))
               .catch(error => {
                    throw(error)
               })
     }, [])

     return (
          <div className={style.app}>
               <AppHeader activePage='constructorPage' />
               <main className={style.main}>
                    {dataBurgers ? <BurgerIngredients dataIngredients={dataBurgers}/> : null}
                    <BurgerConstructor />
               </main>
               {visibleModal && <ModalWindow dataIngredients={dataBurgers[0]}/>}
          </div>  
     );
}

export default App;
