import { FC, useRef } from 'react';
import { DropTargetMonitor, XYCoord, useDrag, useDrop } from 'react-dnd';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { decrementQuantity } from '../../../../services/ingredients-data/ingredients-data';
import { deleteIngredient } from '../../../../services/constructor-elements/constructor-elements';
import { moveIngredients } from '../../../../services/constructor-elements/constructor-elements';
import style from './element-constructor.module.scss';
import { IIngredient } from '../../../../types/ingredient';
import { useAppDispatch } from '../../../../utils/hooks/redux-hook';
import { Identifier } from 'dnd-core';

interface IActiveElem extends IIngredient {
     id: string;
     index: number;
}

const ElementConstructor: FC<IActiveElem> = ({ name, price, image, id, _id, index }) => {
     const dispatch = useAppDispatch();
     const ref = useRef<HTMLDivElement>(null);

     const [{ handlerId }, drop] = useDrop<IActiveElem, unknown, { handlerId: Identifier | null }>({
          accept: 'sort',
          collect(monitor) {
               return {
                    handlerId: monitor.getHandlerId(),
               };
          },

          hover(item: IActiveElem, monitor: DropTargetMonitor) {
               if (!ref.current) {
                    return;
               }
               const dragIndex = item.index;
               const hoverIndex = index;

               if (dragIndex === hoverIndex) {
                    return;
               }
               const hoverBoundingRect = ref.current?.getBoundingClientRect() || { bottom: 0, top: 0 };
               const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
               const clientOffset = monitor.getClientOffset();
               const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

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

export default ElementConstructor;
