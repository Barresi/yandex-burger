import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks/redux-hook';
import OrderStatusTransform from '../../components/order-status/order-status';
import style from './ingredient-feed.module.scss';

const IngredientFeedPage: FC = () => {
     let price = 0;

     const { pathname } = useLocation();
     const orders = useAppSelector((store) =>
          pathname.split('/')[1] === 'profile' ? store.profileFeed.data?.orders : store.allFeed.data?.orders
     );

     const { id } = useParams();
     const order = useMemo(() => {
          return orders?.find((item) => item._id === id);
     }, [orders, id]);

     return (
          <div className={style.content}>
               <div className={`text text_type_digits-default mb-10 ${style.order_number}`}>#{order?.number}</div>
               <div className='text text_type_main-medium mb-3'>{order?.name}</div>
               <div className='mb-15'>
                    <OrderStatusTransform status={order?.status} />
               </div>
               <h3 className='text text_type_main-medium mb-6'>Состав:</h3>
               <ul className={style.list}>
                    <li>1</li>
               </ul>
               <div className={style.bottom}>
                    <FormattedDate
                         date={new Date(order?.createdAt as string)}
                         className='text text_type_main-default text_color_inactive'
                    />
                    <div className={`text text_type_digits-default ${style.price}`}>
                         {price} <CurrencyIcon type='primary' />
                    </div>
               </div>
          </div>
     );
};

export default IngredientFeedPage;
