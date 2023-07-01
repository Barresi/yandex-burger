import { useState, useEffect } from "react";

import Modal from "../modal/modal-body/modal";
import ModalError from "../modal/modal-content/modal-error/modal-error";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import getDataIngredients from "./utils/api";
import style from "./app.module.css";

const App = () => {
     const [isLoading, setIsLoading] = useState(true);
     const [dataBurgers, setDataBurgers] = useState([]);
     const [isError, setIsError] = useState(false);

     useEffect(() => {
          getDataIngredients()
               .then((data) => {
                    setDataBurgers(data.data);
               })
               .catch(() => {
                    setIsError(true);
               })
               .finally(() => {
                    setIsLoading(false);
               });
     }, []);

     return (
          <div className={style.app}>
               <AppHeader activePage='constructorPage' isLoading={isLoading} />
               <main className={style.main}>
                    <BurgerIngredients
                         dataIngredients={dataBurgers}
                         isLoading={isLoading}
                    />
                    <BurgerConstructor isLoading={isLoading} />
               </main>

               <Modal onClose={() => setIsError(false)} show={isError}>
                    <ModalError error={isError}></ModalError>
               </Modal>
          </div>
     );
};

export default App;
