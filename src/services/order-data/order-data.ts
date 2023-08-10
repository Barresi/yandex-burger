import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postDataIngredients } from '../../utils/api';
import { IInitialStateOrderSlice, IOrderResponse } from '../../types/slices/order';

const initialState: IInitialStateOrderSlice = {
     order: null,
     error: null,
     isLoading: false,
     burgerName: null,
     isActiveModal: false,
};

export const getOrder = createAsyncThunk<IOrderResponse, { ingredients: string[] }>(
     'orderData/getDataOrder',
     async (data) => {
          return await postDataIngredients(data);
     }
);

const orderData = createSlice({
     name: 'orderData',
     initialState,
     reducers: {
          closeModal: (state) => {
               state.isActiveModal = false;
               state.order = null;
          },
          setIsError: (state, action: PayloadAction<string>) => {
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
          builder.addCase(getOrder.rejected, (state) => {
               state.isLoading = false;
               state.error = 'Connection has failed';
               state.isActiveModal = true;
          });
     },
});

export default orderData.reducer;
export const { closeModal, setIsError } = orderData.actions;
