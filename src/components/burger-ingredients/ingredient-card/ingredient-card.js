import PropTypes from 'prop-types';

import { CurrencyIcon , Counter, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import style from './ingredient-card.module.css';

const IngredientCard = ({cardInfo, setModalData}) => {
     return (
          <div className={style.ingredient_card} onClick={() => setModalData({...cardInfo, modalType: 'ingredient-details'})}>
               <img src={cardInfo['image']} alt="bun" className={style.img_ingredient}/>
               <div className={`${style.price} text text_type_digits-default`}> 
                    {cardInfo.price}
                    <CurrencyIcon type="primary" />
               </div>
               <div className={`${style.title} text text_type_main-default`}>{cardInfo.name}</div>
               {cardInfo.__v ? <Counter count={cardInfo.__v} size="default" extraClass="m-1" /> : null}
               <Button htmlType="button" type="secondary" size="small">Добавить</Button>
          </div>
     )
}

const objPropTypes = PropTypes.shape({
     _id: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired,
     proteins: PropTypes.number.isRequired,
     fat: PropTypes.number.isRequired,
     carbohydrates: PropTypes.number.isRequired,
     calories: PropTypes.number.isRequired,
     price: PropTypes.number.isRequired,
     image: PropTypes.string.isRequired,
     image_mobile: PropTypes.string.isRequired,
     image_large: PropTypes.string.isRequired,
     __v: PropTypes.number.isRequired,
});

IngredientCard.propTypes = {
     cardInfo: objPropTypes.isRequired,
}

export default IngredientCard;