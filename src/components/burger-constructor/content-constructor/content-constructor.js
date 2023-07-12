import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import SampleContentConstructor from "./sample-content/sample-content";

import style from "./content-constructor.module.css";

const ContentConstructor = () => {
     const activeItems = useSelector((store) => store.constructor);
     return (
          <>
               <div className={style.top}>
                    {activeItems.bun ? (
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
                    {activeItems.ingredients ? (
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
                    {activeItems.bun ? (
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
