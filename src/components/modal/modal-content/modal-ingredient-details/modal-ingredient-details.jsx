import style from './modal-ingredient-details.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const IngredientDetails = () => {
     const { id } = useParams();

     const ingredients = useSelector((store) => store.ingredients.ingredients);
     const [ingredientInfo, setIngredientInfo] = useState({});

     useEffect(() => {
          if (ingredients.length) {
               setIngredientInfo(ingredients.find((item) => item._id === id));
          }
     }, [ingredients]);

     return (
          <>
               <img src={ingredientInfo?.image_large} alt='' className={style.img} />
               <div className={`text text_type_main-medium ${style.name}`}>{ingredientInfo?.name}</div>
               <div className={`text text_color_inactive ${style.compound}`}>
                    <div className='calories'>
                         <div className={`text_type_main-default mb-2`}>Калории,ккал</div>
                         <div className={`text_type_digits-default`}>{ingredientInfo?.calories}</div>
                    </div>
                    <div className='proteins'>
                         <div className={`text_type_main-default mb-2`}>Белки, г</div>
                         <div className={`text_type_digits-default`}>{ingredientInfo?.proteins}</div>
                    </div>

                    <div className='fat'>
                         <div className={`text_type_main-default mb-2`}>Жиры, г</div>
                         <div className={`text_type_digits-default`}>{ingredientInfo?.fat}</div>
                    </div>
                    <div className='carbohydrates'>
                         <div className={`text_type_main-default mb-2`}>Углеводы, г</div>
                         <div className={`text_type_digits-default`}>{ingredientInfo?.carbohydrates}</div>
                    </div>
               </div>
          </>
     );
};

export default IngredientDetails;
