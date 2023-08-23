import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderFeed from '../../components/order-feed/order-feed';
import style from './feed.module.scss';
import { useState } from 'react';

const FeedPage = () => {
     const [current, setCurrent] = useState<'orders' | 'info'>('orders');
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
                                        <OrderFeed />
                                        <OrderFeed />
                                        <OrderFeed />
                                        <OrderFeed />
                                        <OrderFeed />
                                        <OrderFeed />
                                        <OrderFeed />
                                        <OrderFeed />
                                   </ul>
                              </section>
                              <section className={style.info}>
                                   <div className={style.state_orders}>
                                        <div className={style.ready}>
                                             <div className='text text_type_main-medium'>Готовы:</div>
                                             <ul className={style.ready_list}>
                                                  <li className={`${style.ready_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li className={`${style.ready_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li className={`${style.ready_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li className={`${style.ready_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li className={`${style.ready_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li className={`${style.ready_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li className={`${style.ready_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className={style.process}>
                                             <div className='text text_type_main-medium'>В работе:</div>
                                             <ul className={style.process_list}>
                                                  <li
                                                       className={`${style.process_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li
                                                       className={`${style.process_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li
                                                       className={`${style.process_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li
                                                       className={`${style.process_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li
                                                       className={`${style.process_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li
                                                       className={`${style.process_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                                  <li
                                                       className={`${style.process_number} text text_type_digits-default`}>
                                                       034533
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className={style.total_all_time}>
                                        <p className='text text_type_main-medium'>Выполнено за все время:</p>
                                        <div className='text text_type_digits-large'>28 752</div>
                                   </div>
                                   <div className={style.total_day}>
                                        <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
                                        <div className='text text_type_digits-large'>138</div>
                                   </div>
                              </section>
                         </>
                    ) : current === 'orders' ? (
                         <section className={style.orders_list}>
                              <ul>
                                   <OrderFeed />
                                   <OrderFeed />
                                   <OrderFeed />
                                   <OrderFeed />
                                   <OrderFeed />
                                   <OrderFeed />
                                   <OrderFeed />
                                   <OrderFeed />
                              </ul>
                         </section>
                    ) : (
                         <section className={style.info}>
                              <div className={style.state_orders}>
                                   <div className={style.ready}>
                                        <div className='text text_type_main-medium'>Готовы:</div>
                                        <ul className={style.ready_list}>
                                             <li className={`${style.ready_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.ready_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.ready_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.ready_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.ready_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.ready_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.ready_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                        </ul>
                                   </div>
                                   <div className={style.process}>
                                        <div className='text text_type_main-medium'>В работе:</div>
                                        <ul className={style.process_list}>
                                             <li className={`${style.process_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.process_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.process_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.process_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.process_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.process_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                             <li className={`${style.process_number} text text_type_digits-default`}>
                                                  034533
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className={style.total_all_time}>
                                   <p className='text text_type_main-medium'>Выполнено за все время:</p>
                                   <div className='text text_type_digits-large'>28 752</div>
                              </div>
                              <div className={style.total_day}>
                                   <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
                                   <div className='text text_type_digits-large'>138</div>
                              </div>
                         </section>
                    )}
               </div>
          </div>
     );
};

export default FeedPage;
