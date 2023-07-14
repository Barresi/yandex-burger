import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postDataIngredients } from "../../components/app/utils/api";

const initialState = {
     order: null,
     error: null,
     isLoading: false,
     burgerName: null,
     isActiveModal: false,
};

export const getOrder = createAsyncThunk(
     "orderData/getDataOrder",
     async (data, { rejectWithValue }) => {
          try {
               const response = await postDataIngredients(data);
               return response;
          } catch (err) {
               return rejectWithValue(err);
          }
     }
);

const orderData = createSlice({
     name: "orderData",
     initialState,
     reducers: {
          closeModal: (state) => {
               state.isActiveModal = false;
          },
          setIsError: (state, action) => {
               state.error = action.payload;
               state.isActiveModal = true;
          },
     },
     extraReducers: (builder) => {
          builder.addCase(getOrder.pending, (state) => {
               state.error = null;
               state.isLoading = true;
               state.burgerName = null;
               state.order = null;
          });
          builder.addCase(getOrder.fulfilled, (state, action) => {
               state.order = action.payload.order.number;
               state.burgerName = action.payload.name;
               state.isLoading = false;
               state.isActiveModal = true;
          });
          builder.addCase(getOrder.rejected, (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
               state.isActiveModal = true;
          });
     },
});

export default orderData.reducer;
export const { closeModal, setIsError } = orderData.actions;
