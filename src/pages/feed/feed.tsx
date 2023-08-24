import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderFeed from '../../components/order-feed/order-feed';
import style from './feed.module.scss';
import { useState } from 'react';
import { useAppSelector } from '../../utils/hooks/redux-hook';
import FeedInfo from './feed-info/feed-info';

const FeedPage = () => {
     const [current, setCurrent] = useState<'orders' | 'info'>('orders');
     const orders = useAppSelector((store) => store.wsConnection.data?.orders);

     return (
          <div className={style.container}>
               <h2 className='text text_type_main-large mb-5'>Лента заказов</h2>
               <div className={style.tabs}>
                    <Tab value='one' active={current === 'orders'} onClick={() => setCurrent('orders')}>
                         Заказы
                    </Tab>
                    <Tab value='two' active={current === 'info'} onClick={() => setCurrent('info')}>
                         Статистика
                    </Tab>
               </div>
               <div className={style.main}>
                    {window.innerWidth >= 1024 ? (
                         <>
                              <section className={style.orders_list}>
                                   <ul>
                                        {orders?.map((item, ind) => (
                                             <OrderFeed {...item} key={ind} />
                                        ))}
                                   </ul>
                              </section>
                              <FeedInfo />
                         </>
                    ) : current === 'orders' ? (
                         <section className={style.orders_list}>
                              <ul>
                                   {orders?.map((item, ind) => (
                                        <OrderFeed {...item} key={ind} />
                                   ))}
                              </ul>
                         </section>
                    ) : (
                         <FeedInfo />
                    )}
               </div>
          </div>
     );
};

export default FeedPage;