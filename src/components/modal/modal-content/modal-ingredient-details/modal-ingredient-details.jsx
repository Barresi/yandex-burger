import style from "./modal-ingredient-details.module.scss";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
     const { name, calories, carbohydrates, proteins, fat, image_large } =
          useSelector((store) => store.ingredientDetails.ingredient);

     return (
          <>
               <img src={image_large} alt='img-product' className={style.img} />
               <div className={`text text_type_main-medium ${style.name}`}>
                    {name}
               </div>
               <div className={`text text_color_inactive ${style.compound}`}>
                    <div className='calories'>
                         <div className={`text_type_main-default mb-2`}>
                              Калории,ккал
                         </div>
                         <div className={`text_type_digits-default`}>
                              {calories}
                         </div>
                    </div>
                    <div className='proteins'>
                         <div className={`text_type_main-default mb-2`}>
                              Белки, г
                         </div>
                         <div className={`text_type_digits-default`}>
                              {proteins}
                         </div>
                    </div>

                    <div className='fat'>
                         <div className={`text_type_main-default mb-2`}>
                              Жиры, г
                         </div>
                         <div className={`text_type_digits-default`}>{fat}</div>
                    </div>
                    <div className='carbohydrates'>
                         <div className={`text_type_main-default mb-2`}>
                              Углеводы, г
                         </div>
                         <div className={`text_type_digits-default`}>
                              {carbohydrates}
                         </div>
                    </div>
               </div>
          </>
     );
};

export default IngredientDetails;
