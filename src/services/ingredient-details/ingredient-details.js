import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     ingredient: {},
};

const ingredientDetails = createSlice({
     name: "ingredienDetails",
     initialState,
     reducers: {
          addIngredientDetails: (state, action) => {
               state.ingredient = action.payload;
          },
          deleteIngredientDetails: (state, action) => {
               state.ingredient = {};
          },
     },
});

export default ingredientDetails.reducer;
export const { addIngredientDetails, deleteIngredientDetails } =
     ingredientDetails.actions;
