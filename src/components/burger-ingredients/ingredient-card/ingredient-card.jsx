import { CurrencyIcon, Counter, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-card.module.scss';
import ingredientPropTypes from '../../../utils/prop-types';
import { addIngredient } from '../../../services/constructor-elements/constructor-elements';
import { useDispatch } from 'react-redux';
import { addIngredientDetails } from '../../../services/ingredient-details/ingredient-details';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';

const IngredientCard = ({ cardInfo }) => {
     const dispatch = useDispatch();

     const [, dragRef] = useDrag({
          type: 'ingredient',
          item: cardInfo,
     });

     return (
          <div className={style.ingredient_card} ref={dragRef}>
               <Link className={style.card_content} to={`/ingredients/${cardInfo._id}`}>
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
                    onClick={() => dispatch(addIngredient(cardInfo))}>
                    Добавить
               </Button>
          </div>
     );
};

IngredientCard.propTypes = {
     cardInfo: ingredientPropTypes.isRequired,
};

export default IngredientCard;
