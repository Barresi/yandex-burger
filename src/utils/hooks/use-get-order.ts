import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from './redux-hook';
import { IFeedIngredient } from '../../types/reducers/feed-web-socket';

export const useGetOrder = () => {
     const { id } = useParams();
     const { pathname } = useLocation();
     const location = pathname.split('/')[1];
     const orders = useAppSelector((store) =>
          location === 'profile' ? store.profileFeed.data?.orders : store.allFeed.data?.orders
     );
     const order = orders?.find((item) => item._id === id) as IFeedIngredient;
     return { order, location };
};
