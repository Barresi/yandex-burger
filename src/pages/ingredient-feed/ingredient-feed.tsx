import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, useState, useEffect } from 'react';

import { useAppDispatch } from '../../utils/hooks/redux-hook';
import OrderStatusTransform from '../../components/order-status/order-status';
import style from './ingredient-feed.module.scss';
import OrderListIngredients from '../../components/order-list-ingredients/order-list-ingredients';
import { IFeedIngredient } from '../../types/reducers/feed-web-socket';
import { wsConnectProfileFeed, wsDisconnectProfileFeed } from '../../services/reducers/profile-orders/actions';
import { wsConnectAllFeed, wsDisconnectAllFeed } from '../../services/reducers/all-orders/actions';
import { allOrdersWsURL, getProfileOrdersWsURL } from '../../utils/api';
import { useGetOrder } from '../../utils/hooks/use-get-order';

const IngredientFeedPage: FC = () => {
     const [totalPrice, setTotalPrice] = useState(0);
     const { order, location } = useGetOrder();

     const dispatch = useAppDispatch();

     useEffect(() => {
          location === 'profile'
               ? dispatch(wsConnectProfileFeed(getProfileOrdersWsURL()))
               : dispatch(wsConnectAllFeed(allOrdersWsURL));
          return () => {
               location === 'profile' ? dispatch(wsDisconnectProfileFeed()) : dispatch(wsDisconnectAllFeed());
          };
     }, [location, dispatch]);

     return (
          <div className={style.content}>
               <div className={`text text_type_digits-default mb-10 ${style.order_number}`}>#{order?.number}</div>
               <div className='text text_type_main-medium mb-3'>{order?.name}</div>
               <div className='mb-15'>
                    <OrderStatusTransform status={order?.status} />
               </div>
               <h3 className='text text_type_main-medium mb-6'>Состав:</h3>
               <OrderListIngredients order={order as IFeedIngredient} setTotalPrice={(price) => setTotalPrice(price)} />
               <div className={style.bottom}>
                    <FormattedDate
                         date={new Date(order?.createdAt as string)}
                         className='text text_type_main-default text_color_inactive'
                    />
                    <div className={`text text_type_digits-default ${style.price}`}>
                         {totalPrice} <CurrencyIcon type='primary' />
                    </div>
               </div>
          </div>
     );
};

export default IngredientFeedPage;
