import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './order-feed.module.scss';

const OrderFeed = () => {
     return (
          <div className={style.block}>
               <div className={style.head}>
                    <div className='text text_type_main-medium'>#034535</div>
                    <div className='text text_type_main-default text_color_inactive'>Сегодня, 16:20</div>
               </div>
               <div className='text text_type_main-medium'>Death Star Starship Main бургер</div>
               <div className={style.ingredients}>
                    <ul>
                         <li className={style.ingredient}>
                              <img src='https://code.s3.yandex.net/react/code/bun-01-large.png' alt='' />
                         </li>
                         <li className={style.ingredient}>
                              <img src='https://code.s3.yandex.net/react/code/bun-01-large.png' alt='' />
                         </li>
                         <li className={style.ingredient}>
                              <img src='https://code.s3.yandex.net/react/code/bun-01-large.png' alt='' />
                         </li>
                         <li className={style.ingredient}>
                              <img src='https://code.s3.yandex.net/react/code/bun-01-large.png' alt='' />
                         </li>
                         <li className={style.ingredient}>
                              <img src='https://code.s3.yandex.net/react/code/bun-01-large.png' alt='' />
                         </li>
                         <li className={style.ingredient}>
                              <img src='https://code.s3.yandex.net/react/code/bun-01-large.png' alt='' />
                              <div className={`${style.last_ingredient} text text_type_digits-default`}>+3</div>
                         </li>
                    </ul>
                    <div className={`${style.total_price} text text_type_digits-default`}>
                         480 <CurrencyIcon type='primary' />
                    </div>
               </div>
          </div>
     );
};

export default OrderFeed;
