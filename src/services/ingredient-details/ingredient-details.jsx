import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     ingredient: {},
     isActiveModal: false,
};

const ingredientDetails = createSlice({
     name: 'ingredientDetails',
     initialState,
     reducers: {
          addIngredientDetails: (state, action) => {
               state.ingredient = action.payload;
               state.isActiveModal = true;
          },
          deleteIngredientDetails: (state) => {
               state.ingredient = {};
               state.isActiveModal = false;
          },
     },
});

export default ingredientDetails.reducer;
export const { addIngredientDetails, deleteIngredientDetails } = ingredientDetails.actions;
