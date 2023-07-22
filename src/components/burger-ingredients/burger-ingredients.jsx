import 'react-loading-skeleton/dist/skeleton.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ContentCards from './content-cards/content-cards';
import style from './burger-ingredients.module.scss';
import { scrollTabs } from '../../utils/scrollTabs';
import { useRef, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = () => {
     const [activeTab, setActiveTab] = useState('one');
     const bunRef = useRef();
     const saucesRef = useRef();
     const mainRef = useRef();
     const tabRef = useRef();

     const getActiveTab = () => {
          setActiveTab(scrollTabs(bunRef, saucesRef, mainRef, tabRef));
     };

     const setScrollTabs = (ref) => {
          ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
     };

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
                         420 <CurrencyIcon type='primary' />
                    </div>
                    <Button htmlType='button' type='primary' size='small' extraClass='ml-2'>
                         Смотреть заказ
                    </Button>
               </div>
          </section>
     );
};

export default BurgerIngredients;
