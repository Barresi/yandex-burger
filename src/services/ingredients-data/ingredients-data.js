import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDataIngredients } from '../../utils/api';

const initialState = {
     error: null,
     isLoading: false,
     ingredients: [],
};

export const getDataIngredients = createAsyncThunk('ingredients/getDataIngredients', async (_, { rejectWithValue }) => {
     try {
          const response = await fetchDataIngredients();
          return response;
     } catch (err) {
          return rejectWithValue('Connection has failed');
     }
});

const ingredientsSlice = createSlice({
     name: 'ingredients',
     initialState,
     reducers: {
          deleteError: (state) => {
               state.error = null;
          },
          updateQuantity: (state, action) => {
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
          decrementQuantity: (state, action) => {
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
               state.error = action.payload;
          });
     },
});

export default ingredientsSlice.reducer;
export const { deleteError, updateQuantity, clearQuantity, decrementQuantity } = ingredientsSlice.actions;
