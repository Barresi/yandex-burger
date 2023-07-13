import { useSelector, useDispatch } from "react-redux";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import SampleContentConstructor from "./sample-content/sample-content";
import style from "./content-constructor.module.scss";
import { deleteIngredient } from "../../../services/constructor-elements/constructor-elements";

const ContentConstructor = () => {
     const activeItems = useSelector((store) => store.activeConstructorItems);
     const dispatch = useDispatch();

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

               <div className={style.wrapper}>
                    {activeItems.ingredients[0] ? (
                         activeItems.ingredients.map((item) => (
                              <ConstructorElement
                                   text={item.name}
                                   price={item.price}
                                   thumbnail={item.image}
                                   key={item.id}
                                   handleClose={() =>
                                        dispatch(deleteIngredient(item.id))
                                   }
                              />
                         ))
                    ) : (
                         <SampleContentConstructor
                              text='Выбери начинку'
                              type='medium'
                         />
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
