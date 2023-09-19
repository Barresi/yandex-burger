import { FC } from 'react';
import style from './order-element.module.scss';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IIngredient } from '../../types/ingredient';

const OrderElement: FC<{ ingredient: IIngredient }> = ({ ingredient }) => {
     const { image_large, name, price } = ingredient;

     return (
          <li className={style.order}>
               <img src={image_large} alt='ingredient' className={style.img} />
               <div className={`${style.text} text text_type_main-default`}>{name}</div>
               <div className={`${style.price} text text_type_digits-default`}>
                    {price} <CurrencyIcon type='primary' />
               </div>
          </li>
     );
};

export default OrderElement;
