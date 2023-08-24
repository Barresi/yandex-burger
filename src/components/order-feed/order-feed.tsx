import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './order-feed.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { FC, useMemo } from 'react';
import { IFeedIngredient } from '../../types/slices/feed-web-socket';
import { useAppSelector } from '../../utils/hooks/redux-hook';
import { ReactElement } from 'react';

const OrderFeed: FC<IFeedIngredient> = ({ _id, createdAt, status, number, name, ingredients }) => {
     const allIngredients = useAppSelector((store) => store.ingredients.ingredients);
     const { pathname } = useLocation();

     const { imgIngredients, totalPrice } = useMemo(() => {
          let totalPrice = 0;
          const imgIngredients = [] as ReactElement[];
          for (let i = 0; i < ingredients.length; i++) {
               const ingredient = allIngredients.find((item) => item._id === ingredients[i]);
               if (!ingredient) continue;
               const { image_large, price } = ingredient;
               totalPrice += price;
               if (i <= 6) {
                    if (i === 6) {
                         imgIngredients.push(
                              <li className={style.ingredient}>
                                   <img src={image_large} alt='ingredient' />
                                   <div className={`${style.last_ingredient} text text_type_digits-default`}>
                                        +{ingredients.length - i}
                                   </div>
                              </li>
                         );
                    } else {
                         imgIngredients.push(
                              <li className={style.ingredient}>
                                   <img src={image_large} alt='ingredient' />
                              </li>
                         );
                    }
               }
          }
          return { imgIngredients, totalPrice };
     }, [allIngredients, ingredients]);
     return (
          <Link to={`/feed/${_id}`} className={style.block}>
               <div className={style.head}>
                    <div className='text text_type_main-medium'>#{number}</div>
                    <div className='text text_type_main-default text_color_inactive'>
                         <FormattedDate date={new Date(createdAt)} />
                    </div>
               </div>
               <div className='text text_type_main-medium'>{name}</div>
               {pathname === '/profile/orders' ? <div>{status}</div> : null}
               <div className={style.ingredients}>
                    <ul>{imgIngredients}</ul>
                    <div className={`${style.total_price} text text_type_digits-default`}>
                         {totalPrice} <CurrencyIcon type='primary' />
                    </div>
               </div>
          </Link>
     );
};

export default OrderFeed;