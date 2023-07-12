import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     bun: {},
     ingredients: [],
};

const constructorSlice = createSlice({
     name: "constructor",
     initialState,
     reducers: {
          addIngredient: (state, action) => {
               state.ingredients.push(action.payload);
          },
          deleteIngredient: (state, action) => {
               state.ingredients = state.ingredients.filter(
                    (item) => item.id !== action.payload
               );
          },
     },
});

export default constructorSlice.reducer;
export const { addIngredient, deleteIngredient } = constructorSlice.actions;
