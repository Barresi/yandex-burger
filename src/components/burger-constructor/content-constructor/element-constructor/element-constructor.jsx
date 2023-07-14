import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { decrementQuantity } from '../../../../services/ingredients-data/ingredients-data';
import { deleteIngredient } from '../../../../services/constructor-elements/constructor-elements';
import { moveIngredients } from '../../../../services/constructor-elements/constructor-elements';
import PropTypes from 'prop-types';
import style from './element-constructor.module.scss';

const ElementConstructor = ({ name, price, image, id, _id, index }) => {
     const dispatch = useDispatch();
     const ref = useRef(null);
     const [{ handlerId }, drop] = useDrop({
          accept: 'sort',
          collect(monitor) {
               return {
                    handlerId: monitor.getHandlerId(),
               };
          },
          hover(item, monitor) {
               if (!ref.current) {
                    return;
               }
               const dragIndex = item.index;
               const hoverIndex = index;

               if (dragIndex === hoverIndex) {
                    return;
               }
               const hoverBoundingRect = ref.current?.getBoundingClientRect();
               const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
               const clientOffset = monitor.getClientOffset();
               const hoverClientY = clientOffset.y - hoverBoundingRect.top;

               if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return;
               }
               if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return;
               }
               dispatch(moveIngredients({ dragIndex, hoverIndex }));
               item.index = hoverIndex;
          },
     });
     const [{ isDragging }, drag] = useDrag({
          type: 'sort',
          item: { id, index },
          collect: (monitor) => ({
               isDragging: monitor.isDragging(),
          }),
     });

     drag(drop(ref));
     return (
          <div ref={ref} data-handler-id={handlerId} className={`${style.element} ${isDragging && style.setOpacity}`}>
               <ConstructorElement
                    text={name}
                    price={price}
                    thumbnail={image}
                    key={id}
                    handleClose={() => {
                         dispatch(deleteIngredient(id));
                         dispatch(decrementQuantity(_id));
                    }}
               />
          </div>
     );
};

ElementConstructor.propTypes = {
     _id: PropTypes.string.isRequired,
     id: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     price: PropTypes.number.isRequired,
     image: PropTypes.string.isRequired,
     index: PropTypes.number.isRequired,
};

export default ElementConstructor;
