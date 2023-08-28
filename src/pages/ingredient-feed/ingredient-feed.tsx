import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, useMemo, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hook';
import OrderStatusTransform from '../../components/order-status/order-status';
import style from './ingredient-feed.module.scss';
import OrderListIngredients from '../../components/order-list-ingredients/order-list-ingredients';
import { IFeedIngredient } from '../../types/reducers/feed-web-socket';
import { wsConnectProfileFeed, wsDisconnectProfileFeed } from '../../services/reducers/profile-orders/actions';
import { wsConnectAllFeed, wsDisconnectAllFeed } from '../../services/reducers/all-orders/actions';
import { allOrdersWsURL, getProfileOrdersWsURL } from '../../utils/api';

const IngredientFeedPage: FC = () => {
     const [totalPrice, setTotalPrice] = useState(0);

     const dispatch = useAppDispatch();
     const { pathname } = useLocation();
     const location = pathname.split('/')[1];
     const orders = useAppSelector((store) =>
          location === 'profile' ? store.profileFeed.data?.orders : store.allFeed.data?.orders
     );
     useEffect(() => {
          location === 'profile'
               ? dispatch(wsConnectProfileFeed(getProfileOrdersWsURL()))
               : dispatch(wsConnectAllFeed(allOrdersWsURL));
          return () => {
               location === 'profile' ? dispatch(wsDisconnectProfileFeed()) : dispatch(wsDisconnectAllFeed());
          };
     }, []);

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
