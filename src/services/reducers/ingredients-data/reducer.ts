import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDataIngredients } from '../../../utils/api';
import { IInitialStateIngredientsSlice } from '../../../types/reducers/ingredients-data';
import { IIngredient } from '../../../types/ingredient';
import { IIngredientsResponse } from '../../../types/api-types';

const initialState: IInitialStateIngredientsSlice = {
     error: null,
     isLoading: false,
     ingredients: [],
};

export const getDataIngredients = createAsyncThunk<IIngredientsResponse, void, { rejectValue: string }>(
     'ingredients/getDataIngredients',
     async (_, { rejectWithValue }) => {
          try {
               return await fetchDataIngredients();
          } catch (err) {
               return rejectWithValue('Connection has failed');
          }
     }
);

const ingredientsReducer = createSlice({
     name: 'ingredients',
     initialState,
     reducers: {
          deleteError: (state) => {
               state.error = null;
          },
          updateQuantity: (state, action: PayloadAction<IIngredient>) => {
               if (action.payload.type === 'bun') {
                    state.ingredients = state.ingredients.map((item) =>
                         item.type === 'bun'
                              ? item._id === action.payload._id
                                   ? { ...item, __v: 1 }
                                   : { ...item, __v: 0 }
                              : item
                    );
               } else {
                    state.ingredients = state.ingredients.map((item) =>
                         item._id === action.payload._id ? { ...item, __v: item.__v + 1 } : item
                    );
               }
          },
          clearQuantity: (state) => {
               state.ingredients = state.ingredients.map((item) => ({
                    ...item,
                    __v: 0,
               }));
          },
          decrementQuantity: (state, action: PayloadAction<string>) => {
               state.ingredients = state.ingredients.map((item) =>
                    item._id === action.payload ? { ...item, __v: item.__v - 1 } : item
               );
          },
     },
     extraReducers: (builder) => {
          builder.addCase(getDataIngredients.pending, (state) => {
               state.error = null;
               state.isLoading = true;
          });
          builder.addCase(getDataIngredients.fulfilled, (state, action) => {
               state.ingredients = action.payload.data;
               state.isLoading = false;
          });
          builder.addCase(getDataIngredients.rejected, (state, action) => {
               state.isLoading = false;
               if (action.payload) {
                    state.error = action.payload;
               } else {
                    state.error = 'Что-то пошло не так :(';
               }
          });
     },
});

export default ingredientsReducer.reducer;
export const { deleteError, updateQuantity, clearQuantity, decrementQuantity } = ingredientsReducer.actions;
