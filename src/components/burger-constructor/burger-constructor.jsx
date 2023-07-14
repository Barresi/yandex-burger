import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ContentConstructor from './content-constructor/content-constructor';
import Modal from '../modal/modal-body/modal';
import OrderDetails from '../modal/modal-content/modal-order-details/modal-order-details';
import ModalError from '../modal/modal-content/modal-error/modal-error';
import style from './burger-constructor.module.scss';
import { closeModal, getOrder, setIsError } from '../../services/order-data/order-data';
import Loader from './loader-constructor/loader-constructor';
import { addIngredient, clearIngredients } from '../../services/constructor-elements/constructor-elements';
import { useDrop } from 'react-dnd';
import { clearQuantity, updateQuantity } from '../../services/ingredients-data/ingredients-data';

const BurgerConstructor = () => {
     const { isActiveModal, order, error, isLoading } = useSelector((store) => store.order);
     const activeItems = useSelector((store) => store.activeConstructorItems);
     const dispatch = useDispatch();

     const [{ isOver }, dragRef] = useDrop({
          accept: 'ingredient',
          drop(item) {
               dispatch(addIngredient(item));
               dispatch(updateQuantity(item));
          },
          collect: (monitor) => ({
               isOver: monitor.isOver(),
          }),
     });

     const checkoutSubmit = () => {
          if (activeItems.ingredients[0] && activeItems.bun.name) {
               const data = [...activeItems.ingredients.map((item) => item._id), activeItems.bun._id];
               dispatch(getOrder({ ingredients: data }));
               dispatch(clearIngredients());
               dispatch(clearQuantity());
          } else {
               dispatch(setIsError('Выберите булку и начинку'));
          }
     };

     const totalPrice = useMemo(() => {
          return activeItems.ingredients.reduce((acc, curr) => acc + curr.price, 0) + activeItems.bun.price * 2;
     }, [activeItems]);

     return (
          <section className={`${style.burger_constructor} ${isOver ? style.isOver : null}`} ref={dragRef}>
               <ContentConstructor />

               <div className={style.checkout}>
                    <div className={`text text_type_digits-medium ${style.price}`}>
                         {totalPrice ? totalPrice : 0}
                         <CurrencyIcon type='primary' />
                    </div>
                    <Button htmlType='button' type='primary' size='medium' onClick={checkoutSubmit}>
                         Оформить заказ
                    </Button>
               </div>

               {isActiveModal ? (
                    <Modal modalType={error ? null : 'Заказ оформлен'} onClose={() => dispatch(closeModal())}>
                         {error ? <ModalError error={error} /> : <OrderDetails order={order} />}
                    </Modal>
               ) : null}
               {isLoading && <Loader />}
          </section>
     );
};

export default BurgerConstructor;
