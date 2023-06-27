import PropTypes from 'prop-types';

import style from './modal-ingredient-details.module.css'

const IngredientDetails = ({dataIngredients}) => {
     const { name, calories, carbohydrates, proteins, fat, image_large } = dataIngredients;
     return (
          <>
               <img src={image_large} alt="img-product" className={style.img}/>
               <div className={`text text_type_main-medium ${style.name}`}>{name}</div>
               <div className={`text text_color_inactive ${style.compound}`}>
                    <div className="calories">
                         <div className={`text_type_main-default mb-2`}>Калории,ккал</div>
                         <div className={`text_type_digits-default`}>{calories}</div>
                    </div>
                    <div className="proteins">
                         <div className={`text_type_main-default mb-2`}>Белки, г</div>
                         <div className={`text_type_digits-default`}>{proteins}</div>
                    </div>

                    <div className="fat">
                         <div className={`text_type_main-default mb-2`}>Жиры, г</div>
                         <div className={`text_type_digits-default`}>{fat}</div>
                    </div>
                    <div className="carbohydrates">
                         <div className={`text_type_main-default mb-2`}>Углеводы, г</div>
                         <div className={`text_type_digits-default`}>{carbohydrates}</div>
                    </div>
               </div>
          </>
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
     modalType: PropTypes.string.isRequired,
});

IngredientDetails.propTypes = {
     dataIngredients: objPropTypes.isRequired,
}

export default IngredientDetails;