import { FC } from 'react';

const OrderStatusTransform: FC<{ status: 'created' | 'pending' | 'done' | undefined }> = ({ status }) => {
     let russianStatus: 'Создан' | 'Готовится' | 'Выполнен';
     switch (status) {
          case 'created':
               russianStatus = 'Создан';
               break;
          case 'pending':
               russianStatus = 'Готовится';
               break;
          case 'done':
               russianStatus = 'Выполнен';
               break;
          default:
               russianStatus = 'Выполнен';
     }
     return (
          <div
               className='text text_type_main-default'
               style={russianStatus === 'Выполнен' ? { color: 'rgba(0, 204, 204, 1)' } : undefined}>
               {russianStatus}
          </div>
     );
};

export default OrderStatusTransform;
