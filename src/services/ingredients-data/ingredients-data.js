import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataIngredients } from "../../components/app/utils/api";

const initialState = {
     error: null,
     isLoading: false,
     ingredients: [],
};

export const getDataIngredients = createAsyncThunk(
     "ingredients/getDataIngredients",
     async () => {
          const response = await fetchDataIngredients();
          return response;
     }
);

const ingredientsSlice = createSlice({
     name: "ingredients",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder.addCase(getDataIngredients.pending, (state, action) => {
               state.error = null;
               state.isLoading = true;
          });
          builder.addCase(getDataIngredients.fulfilled, (state, action) => {
               state.ingredients = action.payload.data;
               state.isLoading = false;
          });
          builder.addCase(getDataIngredients.rejected, (state, action) => {
               state.isLoading = false;
               state.error = action;
          });
     },
});

export default ingredientsSlice.reducer;
