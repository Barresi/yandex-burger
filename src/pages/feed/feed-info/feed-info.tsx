import { useAppSelector } from '../../../utils/hooks/redux-hook';
import { useMemo } from 'react';
import style from './feed-info.module.scss';

const FeedInfo = () => {
     const orders = useAppSelector((store) => store.allFeed.data?.orders);
     const total = useAppSelector((store) => store.allFeed.data?.total);
     const totalToday = useAppSelector((store) => store.allFeed.data?.totalToday);
     const { readyOrders, processOrders } = useMemo(
          () => ({
               readyOrders: orders?.map((item) => (item.status === 'done' ? item.number : null)),
               processOrders: orders?.map((item) => (item.status === 'pending' ? item.number : null)),
          }),
          [orders]
     );
     return (
          <section className={style.info}>
               <div className={style.state_orders}>
                    <div className={style.ready}>
                         <div className='text text_type_main-medium'>Готовы:</div>
                         <ul className={style.ready_list}>
                              {readyOrders?.map((item, ind) =>
                                   ind < 10 ? (
                                        <li key={ind} className={`${style.ready_number} text text_type_digits-default`}>
                                             {item}
                                        </li>
                                   ) : null
                              )}
                         </ul>
                    </div>
                    <div className={style.process}>
                         <div className='text text_type_main-medium'>В работе:</div>
                         <ul className={style.process_list}>
                              {processOrders?.map((item, ind) =>
                                   ind < 10 ? (
                                        <li
                                             key={ind}
                                             className={`${style.process_number} text text_type_digits-default`}>
                                             {item}
                                        </li>
                                   ) : null
                              )}
                         </ul>
                    </div>
               </div>
               <div className={style.total_all_time}>
                    <p className='text text_type_main-medium'>Выполнено за все время:</p>
                    <div className={`${style.total} text text_type_digits-large`}>{total}</div>
               </div>
               <div className={style.total_day}>
                    <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
                    <div className={`${style.total} text text_type_digits-large`}>{totalToday}</div>
               </div>
          </section>
     );
};

export default FeedInfo;
