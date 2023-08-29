import { FC, useState } from 'react';
import OrderStatusTransform from '../../../order-status/order-status';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal-ingredient-feed.module.scss';
import OrderListIngredients from '../../../order-list-ingredients/order-list-ingredients';
import { IFeedIngredient } from '../../../../types/reducers/feed-web-socket';
import { useGetOrder } from '../../../../utils/hooks/use-get-order';

const ModalIngredientFeed: FC = () => {
     const { order } = useGetOrder();

     const [totalPrice, setTotalPrice] = useState(0);

     return (
          <div className={style.content}>
               <div className='text text_type_main-medium mt-10'>{order?.name}</div>
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

export default ModalIngredientFeed;
