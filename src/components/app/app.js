import { useState, useEffect } from "react";
import { DataBurgersContext } from "./utils/context/data-burgers-context";
import { ActiveConstructorIngredients } from "./utils/context/active-constructor-ingredients";

import Modal from "../modal/modal-body/modal";
import ModalError from "../modal/modal-content/modal-error/modal-error";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import { getDataIngredients } from "./utils/api";
import style from "./app.module.css";

const App = () => {
     const [isLoading, setIsLoading] = useState(true);
     const [dataBurgers, setDataBurgers] = useState([]);
     const activeConstructorIngredients = useState({
          bun: {
               calories: 420,
               carbohydrates: 53,
               fat: 24,
               image: "https://code.s3.yandex.net/react/code/bun-02.png",
               image_large:
                    "https://code.s3.yandex.net/react/code/bun-02-large.png",
               image_mobile:
                    "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
               name: "Краторная булка N-200i",
               price: 1255,
               proteins: 80,
               type: "bun",
               __v: 0,
               _id: "643d69a5c3f7b9001cfa093c",
          },
          ingredients: [
               {
                    calories: 14,
                    carbohydrates: 11,
                    fat: 22,
                    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                    image_large:
                         "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                    image_mobile:
                         "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                    name: "Соус фирменный Space Sauce",
                    price: 80,
                    proteins: 50,
                    type: "sauce",
                    __v: 0,
                    _id: "643d69a5c3f7b9001cfa0943",
               },
               {
                    calories: 14,
                    carbohydrates: 11,
                    fat: 22,
                    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                    image_large:
                         "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                    image_mobile:
                         "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                    name: "Соус фирменный Space Sauce",
                    price: 80,
                    proteins: 50,
                    type: "sauce",
                    __v: 0,
                    _id: "643d69a5c3f7b9001cfa0943",
               },
               {
                    calories: 14,
                    carbohydrates: 11,
                    fat: 22,
                    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                    image_large:
                         "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                    image_mobile:
                         "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                    name: "Соус фирменный Space Sauce",
                    price: 80,
                    proteins: 50,
                    type: "sauce",
                    __v: 0,
                    _id: "643d69a5c3f7b9001cfa0943",
               },
               {
                    calories: 14,
                    carbohydrates: 11,
                    fat: 22,
                    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                    image_large:
                         "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                    image_mobile:
                         "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                    name: "Соус фирменный Space Sauce",
                    price: 80,
                    proteins: 50,
                    type: "sauce",
                    __v: 0,
                    _id: "643d69a5c3f7b9001cfa0943",
               },
          ],
     });
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
                    <ActiveConstructorIngredients.Provider
                         value={activeConstructorIngredients}>
                         <DataBurgersContext.Provider value={dataBurgers}>
                              <BurgerIngredients isLoading={isLoading} />
                              <BurgerConstructor isLoading={isLoading} />
                         </DataBurgersContext.Provider>
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
