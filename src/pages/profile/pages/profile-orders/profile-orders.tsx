import OrderFeed from '../../../../components/order-feed/order-feed';
import style from './profile-orders.module.scss';

const ProfileOrdersPage = () => {
     return (
          <div className={style.orders}>
               <OrderFeed />
               <OrderFeed />
               <OrderFeed />
               <OrderFeed />
               <OrderFeed />
               <OrderFeed />
               <OrderFeed />
          </div>
     );
};

export default ProfileOrdersPage;
