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
          clearIngredients: (state) => {
               state.ingredients = [];
               state.bun = {};
          },
          moveIngredients: (state, action) => {
               state.ingredients.splice(
                    action.payload.hoverIndex,
                    0,
                    state.ingredients.splice(action.payload.dragIndex, 1)[0]
               );
          },
     },
});

export default constructorSlice.reducer;
export const {
     addIngredient,
     deleteIngredient,
     clearIngredients,
     moveIngredients,
} = constructorSlice.actions;
