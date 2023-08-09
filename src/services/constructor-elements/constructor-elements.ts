import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { IInitialStateActiveItems } from '../../types/slices/active-ingredients';
import { IIngredient } from '../../types/ingredient';

const initialState: IInitialStateActiveItems = {
     bun: null,
     ingredients: [],
};

const constructorSlice = createSlice({
     name: 'constructor',
     initialState,
     reducers: {
          addIngredient: (state, action: PayloadAction<IIngredient>) => {
               if (action.payload.type === 'bun') {
                    state.bun = action.payload;
               } else {
                    state.ingredients.push({ ...action.payload, id: uuidv4() });
               }
          },
          deleteIngredient: (state, action: PayloadAction<string>) => {
               state.ingredients = state.ingredients.filter((item) => item.id !== action.payload);
          },
          clearIngredients: (state) => {
               state.ingredients = [];
               state.bun = null;
          },
          moveIngredients: (state, action: PayloadAction<{ dragIndex: number; hoverIndex: number }>) => {
               state.ingredients.splice(
                    action.payload.hoverIndex,
                    0,
                    state.ingredients.splice(action.payload.dragIndex, 1)[0]
               );
          },
     },
});

export default constructorSlice.reducer;
export const { addIngredient, deleteIngredient, clearIngredients, moveIngredients } = constructorSlice.actions;
