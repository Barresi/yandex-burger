import {useState, useEffect} from 'react';
import { createPortal } from 'react-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import Modal from '../modals/modal';
import ModalOverlay from '../modals/modal-overlay/modal-overlay';

import style from './app.module.css';

const url = 'https://norma.nomoreparties.space/api/ingredients';
const modalRootElement = document.querySelector("#modal");

const App = () => {

     const [isLoading, setIsLoading] = useState(true);
     const [dataBurgers, setDataBurgers] = useState([]);
     const [modalData, setModalData] = useState(null);

     useEffect(() => {
          fetch(url)
               .then(response => response.ok ? response.json() : Promise.reject(response))
               .then(data => {setDataBurgers(data.data); setIsLoading(false)})
               .catch(error => {
                    setModalData({modalType: 'error', status: error.status})
               })
     }, [])

     return (
          <div className={style.app}>
               <SkeletonTheme baseColor="#202020" highlightColor="#444"> 
                    <AppHeader activePage='constructorPage' isLoading={isLoading}/>
                    <main className={style.main}>
                         <BurgerIngredients 
                              dataIngredients={dataBurgers} 
                              setModalData={setModalData} 
                              isLoading={isLoading} />
                         <BurgerConstructor isLoading={isLoading} setModalData={setModalData}/>
                    </main>
                    {modalData ? createPortal(
                    <ModalOverlay closeModal={setModalData}>
                         <Modal modalData={modalData} closeModal={setModalData}/>
                    </ModalOverlay>, modalRootElement) : null}
               </SkeletonTheme>  
          </div>  
     );
}

export default App;
