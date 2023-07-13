import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import {
     Button,
     CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Tabs from "./tabs/tabs";
import ContentCards from "./content-cards/content-cards";
import style from "./burger-ingredients.module.scss";
import { deleteIngredientDetails } from "../../services/ingredient-details/ingredient-details";
import Modal from "../modal/modal-body/modal";
import IngredientDetails from "../modal/modal-content/modal-ingredient-details/modal-ingredient-details";

const BurgerIngredients = () => {
     const { isActiveModal } = useSelector((store) => store.ingredientDetails);
     const dispatch = useDispatch();

     return (
          <section className={style.burger_ingredients}>
               <h1
                    className={`text text_type_main-large mt-10 mb-5 ${style.h1}`}>
                    Соберите бургер
               </h1>

               <Tabs className={style.tabs} activeTab={"one"} />
               <ContentCards />

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
               {isActiveModal ? (
                    <Modal
                         modalType='Детали ингредиента'
                         onClose={() => {
                              dispatch(deleteIngredientDetails());
                         }}>
                         <IngredientDetails />
                    </Modal>
               ) : null}
          </section>
     );
};

export default BurgerIngredients;
