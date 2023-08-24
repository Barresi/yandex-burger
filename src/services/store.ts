import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './slices/ingredients-data/ingredients-data';
import constructorSlice from './slices/constructor-elements/constructor-elements';
import orderReducer from './slices/order-data/order-data';
import authReducer from './slices/auth/auth';
import feedSlice from './slices/feed-web-socket/slice';
import { socketMiddleware } from './middleware/socket-middleware';

const feedMiddleware = socketMiddleware('wss://norma.nomoreparties.space/orders/all');

export const store = configureStore({
     reducer: {
          ingredients: ingredientsReducer,
          activeConstructorItems: constructorSlice,
          order: orderReducer,
          profileInfo: authReducer,
          wsConnection: feedSlice,
     },
     middleware: (getDefaultMiddleware) => {
          return getDefaultMiddleware().concat(feedMiddleware);
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
