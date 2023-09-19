import { FC } from 'react';
import style from './check-order.module.scss';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hook';
import OrderElement from '../../components/order-element/order-element';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { IIngredient } from '../../types/ingredient';
import { closeModal, getOrder, setIsError } from '../../services/reducers/get-order/reducer';
import { clearIngredients } from '../../services/reducers/constructor-elements/reducer';
import { clearQuantity } from '../../services/reducers/ingredients-data/reducer';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/loader';
import Modal from '../../components/modal/modal-body/modal';
import OrderDetails from '../../components/modal/modal-content/modal-order-details/modal-order-details';
import ModalError from '../../components/modal/modal-content/modal-error/modal-error';
import arrow from '../../images/arrow.png';

const CheckOrderPage: FC = () => {
     const { isActiveModal, order, error, isLoading } = useAppSelector((store) => store.getOrder);
     const { bun, ingredients } = useAppSelector((store) => store.activeConstructorItems);
     const isUserAuth = useAppSelector((store) => store.profileInfo.isUserAuth);
     const dispatch = useAppDispatch();
     const navigate = useNavigate();
     const totalPrice = useMemo(() => {
          return ingredients.reduce((acc, curr) => acc + curr.price, 0) + (bun ? bun.price * 2 : 0);
     }, [bun, ingredients]);
     const checkoutSubmit = (): void => {
          if (ingredients.length && bun) {
               if (isUserAuth) {
                    const data: string[] = [bun._id, ...ingredients.map((item: IIngredient) => item._id), bun._id];
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
     return (
          <div className={style.order}>
               <h2 className={`text text_type_main-large ${style.title}`}>Заказ</h2>
               <ul className={style.list}>
                    {bun && <OrderElement ingredient={{ ...bun, name: bun.name + ' (верх)' }} />}
                    {ingredients.map((item, ind) => (
                         <OrderElement ingredient={item} key={ind} />
                    ))}
                    {bun && <OrderElement ingredient={{ ...bun, name: bun.name + ' (низ)' }} />}
               </ul>
               <div className={style.checkout}>
                    <input type='image' src={arrow} onClick={() => navigate('/')} />
                    <div className={style.totalPrice}>
                         <div className={`${style.price} text text_type_digits-default`}>
                              {totalPrice} <CurrencyIcon type='primary' />
                         </div>

                         <Button
                              htmlType='button'
                              type='primary'
                              size='small'
                              extraClass='ml-2'
                              onClick={checkoutSubmit}>
                              Заказать
                         </Button>
                    </div>
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
          </div>
     );
};

export default CheckOrderPage;
