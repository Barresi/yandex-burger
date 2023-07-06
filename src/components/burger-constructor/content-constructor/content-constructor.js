import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ActiveConstructorIngredients } from "../../app/utils/context/active-constructor-ingredients";

import SampleContentConstructor from "./sample-content/sample-content";

import style from "./content-constructor.module.css";

const ContentConstructor = () => {
     const [activeItems, setActiveItems] = useContext(
          ActiveConstructorIngredients
     );
     return (
          <>
               <div className={style.top}>
                    {activeItems.bun.name ? (
                         <ConstructorElement
                              type='top'
                              isLocked={true}
                              text={activeItems.bun.name}
                              price={activeItems.bun.price}
                              thumbnail={activeItems.bun.image}
                         />
                    ) : (
                         <SampleContentConstructor
                              type='top'
                              text='Выбери булку'
                         />
                    )}
               </div>

               <div className={style.wrap}>
                    {activeItems.ingredients[0] ? (
                         activeItems.ingredients.map((item) => (
                              <ConstructorElement
                                   text={item.name}
                                   price={item.price}
                                   thumbnail={item.image}
                                   key={uuidv4()}
                              />
                         ))
                    ) : (
                         <SampleContentConstructor text='Выбери начинку' />
                    )}
               </div>

               <div className={style.bottom}>
                    {activeItems.bun.name ? (
                         <ConstructorElement
                              type='bottom'
                              isLocked={true}
                              text={activeItems.bun.name}
                              price={activeItems.bun.price}
                              thumbnail={activeItems.bun.image}
                         />
                    ) : (
                         <SampleContentConstructor
                              type='bottom'
                              text='Выбери булку'
                         />
                    )}
               </div>
          </>
     );
};

export default ContentConstructor;
