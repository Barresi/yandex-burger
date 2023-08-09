import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './ingredients-data/ingredients-data';
import constructorSlice from './constructor-elements/constructor-elements';
import orderReducer from './order-data/order-data';
import authReducer from './auth/auth';

export const store = configureStore({
     reducer: {
          ingredients: ingredientsReducer,
          activeConstructorItems: constructorSlice,
          order: orderReducer,
          profileInfo: authReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
