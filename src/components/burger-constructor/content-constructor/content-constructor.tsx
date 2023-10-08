import { FC } from 'react';
import { useAppSelector } from '../../../utils/hooks/redux-hook';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import SampleContentConstructor from '../sample-content/sample-content';
import style from './content-constructor.module.scss';

import ElementConstructor from '../element-constructor/element-constructor';

const ContentConstructor: FC = () => {
     const activeItems = useAppSelector((store) => store.activeConstructorItems);

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
                         <SampleContentConstructor type='top' text='Выберите булку' />
                    )}
               </div>

               <div className={style.wrapper}>
                    {activeItems.ingredients.length ? (
                         activeItems.ingredients.map((item, index) => (
                              <ElementConstructor {...item} index={index} key={item.id} />
                         ))
                    ) : (
                         <SampleContentConstructor text='Выберите начинку' type='medium' />
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
                         <SampleContentConstructor type='bottom' text='Выберите булку' />
                    )}
               </div>
          </>
     );
};

export default ContentConstructor;
