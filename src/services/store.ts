import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './reducers/ingredients-data/reducer';
import constructorReducer from './reducers/constructor-elements/reducer';
import orderReducer from './reducers/get-order/reducer';
import authReducer from './reducers/auth/reducer';
import allFeedReducer from './reducers/all-orders/reducer';
import profileFeedReducer from './reducers/profile-orders/reducer';
import { socketMiddleware } from './middleware/socket-middleware';
import { allFeedActions } from './reducers/all-orders/actions';
import { profileFeedActions } from './reducers/profile-orders/actions';

const allFeedMiddleware = socketMiddleware(allFeedActions);
const profileFeedMiddleware = socketMiddleware(profileFeedActions);

export const store = configureStore({
     reducer: {
          ingredients: ingredientsReducer,
          activeConstructorItems: constructorReducer,
          getOrder: orderReducer,
          profileInfo: authReducer,
          allFeed: allFeedReducer,
          profileFeed: profileFeedReducer,
     },
     middleware: (getDefaultMiddleware) => {
          return getDefaultMiddleware().concat(allFeedMiddleware, profileFeedMiddleware);
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
