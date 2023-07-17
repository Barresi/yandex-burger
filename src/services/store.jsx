import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './ingredients-data/ingredients-data';
import constructorSlice from './constructor-elements/constructor-elements';
import ingredientDetailsReducer from './ingredient-details/ingredient-details';
import orderReducer from './order-data/order-data';
import authReducer from './auth/auth';

export const store = configureStore({
     reducer: {
          ingredients: ingredientsReducer,
          activeConstructorItems: constructorSlice,
          ingredientDetails: ingredientDetailsReducer,
          order: orderReducer,
          profileInfo: authReducer,
     },
});
