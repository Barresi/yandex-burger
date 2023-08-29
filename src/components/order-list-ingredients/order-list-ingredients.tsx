import { FC, useEffect, useMemo } from 'react';
import style from './order-list-ingredients.module.scss';
import { useAppSelector } from '../../utils/hooks/redux-hook';
import { IFeedIngredient } from '../../types/reducers/feed-web-socket';
import { IIngredient } from '../../types/ingredient';

interface IIngredientData {
     _id: string;
     count: number;
     price: number;
     image_large: string;
     name: string;
}

const OrderListIngredients: FC<{ order: IFeedIngredient; setTotalPrice: (price: number) => void }> = ({
     order,
     setTotalPrice,
}) => {
     const allIngredients = useAppSelector((store) => store.ingredients.ingredients);
     const { ingredientsData, totalPrice } = useMemo(() => {
          let totalPrice = 0;
          const ingredientsData: IIngredientData[] = [];
          order?.ingredients.forEach((itemOfOrder) => {
               const isThereIngredientInd = ingredientsData.findIndex((elem) => elem._id === itemOfOrder);
               const isThereIngredient = ingredientsData[isThereIngredientInd];

               if (isThereIngredient) {
                    totalPrice += isThereIngredient.price;
                    isThereIngredient.count += 1;
               } else {
                    const findedElem = allIngredients.find((itemOfAll: IIngredient) => itemOfAll._id === itemOfOrder);
                    const { _id, price, image_large, name } = findedElem as IIngredient;
                    totalPrice += price;
                    ingredientsData.push({
                         _id,
                         price,
                         image_large,
                         name,
                         count: 1,
                    });
               }
          });

          return { ingredientsData, totalPrice };
     }, [order, allIngredients]);

     useEffect(() => {
          setTotalPrice(totalPrice);
     }, [totalPrice, setTotalPrice]);

     return (
          <ul className={style.list}>
               {ingredientsData.map((item, ind) => (
                    <li key={ind}>
                         <div className={style.image}>
                              <img src={item.image_large} alt='ingredient' />
                         </div>
                         <p className={`${style.name} text text_type_main-default`}>{item.name}</p>
                         <div className={`text text_type_main-default text text_type_digits-default ${style.price}`}>
                              {item.count} x {item.price}
                         </div>
                    </li>
               ))}
          </ul>
     );
};

export default OrderListIngredients;
