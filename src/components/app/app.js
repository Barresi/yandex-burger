import { useState, useEffect } from "react";
import { DataBurgersContext } from "./utils/context/data-burgers-context";
import { ActiveConstructorIngredients } from "./utils/context/active-constructor-ingredients";

import Modal from "../modal/modal-body/modal";
import ModalError from "../modal/modal-content/modal-error/modal-error";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import style from "./app.module.css";

const App = () => {
     const activeConstructorIngredients = useState({
          bun: {},
          ingredients: [],
     });
     const [isError, setIsError] = useState(false);

     return (
          <div className={style.app}>
               <AppHeader />
               <main className={style.main}>
                    <ActiveConstructorIngredients.Provider
                         value={activeConstructorIngredients}>
                         <BurgerIngredients />
                         <BurgerConstructor />
                    </ActiveConstructorIngredients.Provider>
               </main>

               {isError ? (
                    <Modal onClose={() => setIsError(false)} show={isError}>
                         <ModalError />
                    </Modal>
               ) : null}
          </div>
     );
};

export default App;
