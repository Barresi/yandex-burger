import PropTypes from "prop-types";
import "react-loading-skeleton/dist/skeleton.css";
import { useInView } from "react-intersection-observer";

import {
     Button,
     CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Tabs from "./tabs/tabs";
import ContentCards from "./content-cards/content-cards";

import style from "./burger-ingredients.module.css";

const BurgerIngredients = ({ isLoading }) => {
     const [refBun, inViewBun] = useInView();
     const [refSauce, inViewSauce] = useInView();
     const [refMain, inViewMain] = useInView();

     const activeTab = () => {
          if (inViewBun) {
               return "one";
          } else if (inViewSauce) {
               return "two";
          } else {
               return "three";
          }
     };

     return (
          <section className={style.burger_ingredients}>
               <h1
                    className={`text text_type_main-large mt-10 mb-5 ${style.h1}`}>
                    Соберите бургер
               </h1>

               <Tabs className={style.tabs} activeTab={activeTab()} />
               <ContentCards
                    isLoading={isLoading}
                    refActiveTabs={{ refBun, refSauce, refMain }}
               />

               <div className={style.checkout}>
                    <div
                         className={`${style.price} text text_type_digits-default`}>
                         420 <CurrencyIcon type='primary' />
                    </div>
                    <Button
                         htmlType='button'
                         type='primary'
                         size='small'
                         extraClass='ml-2'>
                         Смотреть заказ
                    </Button>
               </div>
          </section>
     );
};

BurgerIngredients.propTypes = {
     isLoading: PropTypes.bool.isRequired,
};

export default BurgerIngredients;
