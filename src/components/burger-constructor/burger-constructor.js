//import PropTypes from 'prop-types';
import Skeleton from "react-loading-skeleton";

import { Button, ConstructorElement, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import SkeletonConstructor from "./skeleton-constructor/skeleton-constructor";

import style from './burger-constructor.module.css';

const BurgerConstructor = ({isLoading, setModalData}) => {
     return (
          <section className={style.burger_constructor}>
               {isLoading ? <SkeletonConstructor count={6}/> : 
               <>
                    <ConstructorElement type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={200} thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"/>
                    <div className={style.wrap}>
                         <ConstructorElement text="Говяжий метеорит (отбивная)" price={200} thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"/>
                         <ConstructorElement text="Соус Spicy-X" price={200} thumbnail="https://code.s3.yandex.net/react/code/sauce-02.png"/>
                         <ConstructorElement text="Плоды Фалленианского дерева" price={200} thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"/>
                         <ConstructorElement text="Говяжий метеорит (отбивная)" price={200} thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"/>
                         <ConstructorElement text="Плоды Фалленианского дерева" price={200} thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"/>
                         <ConstructorElement text="Плоды Фалленианского дерева" price={200} thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"/>
                         <ConstructorElement text="Плоды Фалленианского дерева" price={200} thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"/>
                         <ConstructorElement text="Плоды Фалленианского дерева" price={200} thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"/>
                         <ConstructorElement text="Плоды Фалленианского дерева" price={200} thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"/>
                         <ConstructorElement text="Плоды Фалленианского дерева" price={200} thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"/>
                         <ConstructorElement text="Плоды Фалленианского дерева" price={200} thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"/>
                         <ConstructorElement text="Плоды Фалленианского дерева" price={200} thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"/>
                    </div>
                    <ConstructorElement type="bottom" isLocked={true} text="Краторная булка N-200i (низ)" price={200} thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"/> 
               </>}
                
               
               <div className={style.checkout}>
                    {isLoading ? <Skeleton className={style.skeleton_btn}/> : 
                    <>
                         <div className={`text text_type_digits-medium ${style.price}`}>610 <CurrencyIcon type="primary" /></div>
                         <Button htmlType="button" type="primary" size="medium" onClick={() => setModalData({modalType: 'order-details'})}>Оформить заказ</Button>   
                    </>} 
               </div>
          </section>
     )
}

/*const objPropTypes = PropTypes.shape({
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

BurgerConstructor.propTypes = {
     dataIngredients: PropTypes.arrayOf(objPropTypes).isRequired
}*/

export default BurgerConstructor;