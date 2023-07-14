import PropTypes from 'prop-types';
import style from './modal-order-details.module.scss';
import imgOrderAccepted from '../../../../images/order-accepted.svg';

const OrderDetails = ({ order }) => {
     return (
          <>
               <div className={`${style.order} text text_type_digits-large`}>{order}</div>
               <div className='text text_type_main-medium'>идентификатор заказа</div>
               <img src={imgOrderAccepted} alt='' className={style.img} />
               <div className='text text_type_main-default'>Ваш заказ начали готовить</div>
               <div className={`${style.inactive} text text_type_main-default text_color_inactive`}>
                    Дождитесь готовности на орбитальной станции
               </div>
          </>
     );
};

OrderDetails.propTypes = {
     order: PropTypes.number.isRequired,
};

export default OrderDetails;
