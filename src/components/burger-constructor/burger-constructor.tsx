import { FC, useMemo } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ContentConstructor from './content-constructor/content-constructor';
import Modal from '../modal/modal-body/modal';
import OrderDetails from '../modal/modal-content/modal-order-details/modal-order-details';
import ModalError from '../modal/modal-content/modal-error/modal-error';
import style from './burger-constructor.module.scss';
import { closeModal, getOrder, setIsError } from '../../services/reducers/get-order/reducer';
import Loader from '../loader/loader';
import { addIngredient, clearIngredients } from '../../services/reducers/constructor-elements/reducer';
import { useDrop } from 'react-dnd';
import { clearQuantity, updateQuantity } from '../../services/reducers/ingredients-data/reducer';
import { useNavigate } from 'react-router-dom';
import { IIngredient } from '../../types/ingredient';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hook';

const BurgerConstructor: FC = () => {
     const { isActiveModal, order, error, isLoading } = useAppSelector((store) => store.getOrder);
     const { isUserAuth } = useAppSelector((store) => store.profileInfo);
     const activeItems = useAppSelector((store) => store.activeConstructorItems);
     const dispatch = useAppDispatch();
     const navigate = useNavigate();
     const [{ isOver }, dragRef] = useDrop<IIngredient, unknown, { isOver: boolean }>({
          accept: 'ingredient',
          drop(item) {
               dispatch(addIngredient(item));
               dispatch(updateQuantity(item));
          },
          collect: (monitor) => ({
               isOver: monitor.isOver(),
          }),
     });

     const checkoutSubmit = (): void => {
          if (activeItems.ingredients.length && activeItems.bun) {
               if (isUserAuth) {
                    const data: string[] = [
                         activeItems.bun._id,
                         ...activeItems.ingredients.map((item: IIngredient) => item._id),

                         activeItems.bun._id,
                    ];
                    dispatch(getOrder({ ingredients: data }));
                    dispatch(clearIngredients());
                    dispatch(clearQuantity());
               } else {
                    navigate('/login', { replace: true });
               }
          } else {
               dispatch(setIsError('Выберите булку и начинку'));
          }
     };

     const totalPrice = useMemo(() => {
          return (
               activeItems.ingredients.reduce((acc, curr) => acc + curr.price, 0) +
               (activeItems.bun ? activeItems.bun.price * 2 : 0)
          );
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
                         {order ? (
                              <OrderDetails order={order} />
                         ) : error ? (
                              <ModalError error={error} />
                         ) : (
                              <ModalError error={'Что-то пошло не так :('} />
                         )}
                    </Modal>
               ) : null}
               {isLoading && <Loader />}
          </section>
     );
};

export default BurgerConstructor;
