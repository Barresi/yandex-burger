import OrderFeed from '../../../../components/order-feed/order-feed';
import { useAppSelector } from '../../../../utils/hooks/redux-hook';
import style from './profile-orders.module.scss';

const ProfileOrdersPage = () => {
     const orders = useAppSelector((store) => store.profileFeed.data?.orders);
     return (
          <div className={style.orders}>
               {orders?.map((item, ind) => (
                    <OrderFeed {...item} key={ind} />
               ))}
          </div>
     );
};

export default ProfileOrdersPage;
