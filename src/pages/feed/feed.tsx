import OrderFeed from '../../components/order-feed/order-feed';
import style from './feed.module.scss';

const FeedPage = () => {
     return (
          <div className={style.container}>
               <section className={style.orders_list}>
                    <h2 className='text text_type_main-large'>Лента заказов</h2>
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
                                   <li className={`${style.ready_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.ready_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.ready_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.ready_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.ready_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.ready_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.ready_number} text text_type_digits-default`}>034533</li>
                              </ul>
                         </div>
                         <div className={style.process}>
                              <div className='text text_type_main-medium'>В работе:</div>
                              <ul className={style.process_list}>
                                   <li className={`${style.process_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.process_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.process_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.process_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.process_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.process_number} text text_type_digits-default`}>034533</li>
                                   <li className={`${style.process_number} text text_type_digits-default`}>034533</li>
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
          </div>
     );
};

export default FeedPage;
