import { CurrencyIcon, Counter, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-card.module.scss';
import { addIngredient } from '../../../services/reducers/constructor-elements/reducer';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { FC } from 'react';
import { IIngredient } from '../../../types/ingredient';
import { useAppDispatch } from '../../../utils/hooks/redux-hook';
import { incrementQuantity } from '../../../services/reducers/ingredients-data/reducer';

const IngredientCard: FC<{ cardInfo: IIngredient }> = ({ cardInfo }) => {
     const location = useLocation();
     const dispatch = useAppDispatch();
     const [, dragRef] = useDrag({
          type: 'ingredient',
          item: cardInfo,
     });

     return (
          <div className={style.ingredient_card} ref={dragRef} data-cy={`dragitem-${cardInfo._id}`}>
               <Link
                    className={style.card_content}
                    to={`/ingredients/${cardInfo._id}`}
                    state={{ backgroundLocation: location }}>
                    <img src={cardInfo['image']} alt='bun' className={style.img_ingredient} />
                    <div className={`${style.price} text text_type_digits-default`}>
                         {cardInfo.price}
                         <CurrencyIcon type='primary' />
                    </div>
                    <div className={`${style.title} text text_type_main-default`}>{cardInfo.name}</div>
                    {cardInfo.__v ? <Counter count={cardInfo.__v} size='default' extraClass='m-1' /> : null}
               </Link>

               <Button
                    htmlType='button'
                    type='secondary'
                    size='small'
                    onClick={() => {
                         dispatch(addIngredient(cardInfo));
                         dispatch(incrementQuantity(cardInfo));
                    }}>
                    Добавить
               </Button>
          </div>
     );
};

export default IngredientCard;
