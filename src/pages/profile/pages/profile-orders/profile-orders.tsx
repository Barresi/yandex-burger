import OrderFeed from '../../../../components/order-feed/order-feed';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/redux-hook';
import { useEffect, FC } from 'react';
import style from './profile-orders.module.scss';
import { wsConnectProfileFeed, wsDisconnectProfileFeed } from '../../../../services/reducers/profile-orders/actions';
import { getProfileOrdersWsURL } from '../../../../utils/api';

const ProfileOrdersPage: FC = () => {
     const orders = useAppSelector((store) => store.profileFeed.data?.orders);
     const dispatch = useAppDispatch();
     useEffect(() => {
          dispatch(wsConnectProfileFeed(getProfileOrdersWsURL()));
          return () => {
               dispatch(wsDisconnectProfileFeed());
          };
     }, [dispatch]);
     return (
          <>
               <h2 className={`${style.title} text text_type_main-large`}>История заказов</h2>
               <div className={style.orders}>
                    {orders?.map((item, ind) => <OrderFeed {...item} key={ind} />).reverse()}
               </div>
          </>
     );
};

export default ProfileOrdersPage;
