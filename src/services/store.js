import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredients-data/ingredients-data";
import constructorReducer from "./constructor-elements/constructor-elements";
import ingredientDetailsReducer from "./ingredient-details/ingredient-details";

export const store = configureStore({
     reducer: {
          ingredients: ingredientsReducer,
          constructor: constructorReducer,
          ingredientDetails: ingredientDetailsReducer,
     },
});
