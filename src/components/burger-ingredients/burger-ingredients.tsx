import 'react-loading-skeleton/dist/skeleton.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ContentCards from './content-cards/content-cards';
import style from './burger-ingredients.module.scss';
import { scrollTabs } from '../../utils/scrollTabs';
import { useRef, useState, FC, RefObject, useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppSelector } from '../../utils/hooks/redux-hook';
import { Link } from 'react-router-dom';

const BurgerIngredients: FC = () => {
     const [activeTab, setActiveTab] = useState<'one' | 'two' | 'three'>('one');
     const activeItems = useAppSelector((store) => store.activeConstructorItems);
     const bunRef = useRef<HTMLDivElement>(null);
     const saucesRef = useRef<HTMLDivElement>(null);
     const mainRef = useRef<HTMLDivElement>(null);
     const tabRef = useRef<HTMLDivElement>(null);

     const getActiveTab = () => {
          setActiveTab(scrollTabs({ bunRef, saucesRef, mainRef, tabRef }));
     };

     const setScrollTabs = (ref: RefObject<HTMLElement>) => {
          ref.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
     };

     const totalPrice = useMemo(() => {
          return (
               activeItems.ingredients.reduce((acc, curr) => acc + curr.price, 0) +
               (activeItems.bun ? activeItems.bun.price * 2 : 0)
          );
     }, [activeItems]);

     return (
          <section className={style.burger_ingredients}>
               <h1 className={`text text_type_main-large mt-10 mb-5 ${style.h1}`}>Соберите бургер</h1>

               <div className={style.tabs} ref={tabRef}>
                    <Tab value={'one'} active={activeTab === 'one'} key={1} onClick={() => setScrollTabs(bunRef)}>
                         Булки
                    </Tab>
                    <Tab value={'two'} active={activeTab === 'two'} key={2} onClick={() => setScrollTabs(saucesRef)}>
                         Соусы
                    </Tab>
                    <Tab value={'three'} active={activeTab === 'three'} key={3} onClick={() => setScrollTabs(mainRef)}>
                         Начинки
                    </Tab>
               </div>

               <ContentCards bunRef={bunRef} saucesRef={saucesRef} mainRef={mainRef} getActiveTab={getActiveTab} />

               <div className={style.checkout}>
                    <div className={`${style.price} text text_type_digits-default`}>
                         {totalPrice} <CurrencyIcon type='primary' />
                    </div>
                    <Link to='order'>
                         <Button htmlType='button' type='primary' size='small' extraClass='ml-2'>
                              Смотреть заказ
                         </Button>
                    </Link>
               </div>
          </section>
     );
};

export default BurgerIngredients;
