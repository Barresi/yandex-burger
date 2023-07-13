import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
     bun: {},
     ingredients: [],
};

const constructorSlice = createSlice({
     name: "constructor",
     initialState,
     reducers: {
          addIngredient: (state, action) => {
               if (action.payload.type === "bun") {
                    state.bun = action.payload;
               } else {
                    state.ingredients.push({ ...action.payload, id: uuidv4() });
               }
          },
          deleteIngredient: (state, action) => {
               state.ingredients = state.ingredients.filter(
                    (item) => item.id !== action.payload
               );
          },
          clearIngredients: (state, action) => {
               state.ingredients = [];
               state.bun = {};
          },
     },
});

export default constructorSlice.reducer;
export const { addIngredient, deleteIngredient, clearIngredients } =
     constructorSlice.actions;
