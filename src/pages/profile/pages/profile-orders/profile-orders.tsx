import OrderFeed from '../../../../components/order-feed/order-feed';
import { useAppSelector } from '../../../../utils/hooks/redux-hook';
import style from './profile-orders.module.scss';

const ProfileOrdersPage = () => {
     const orders = useAppSelector((store) => store.wsConnection.data?.orders);
     return (
          <div className={style.orders}>
               {orders?.map((item) => (
                    <OrderFeed {...item} />
               ))}
          </div>
     );
};

export default ProfileOrdersPage;
