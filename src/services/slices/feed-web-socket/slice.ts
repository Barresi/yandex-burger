import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDataFeed, IInitialStateFeed, WebsocketStatus } from '../../../types/slices/feed-web-socket';

const initialState: IInitialStateFeed = {
     status: WebsocketStatus.OFFLINE,
     connectionError: null,
     data: null,
};

const feedSlice = createSlice({
     name: 'feed',
     initialState,
     reducers: {
          wsConnection: (state) => {
               state.status = WebsocketStatus.CONNECTING;
               state.connectionError = null;
          },
          wsOpen: (state) => {
               state.status = WebsocketStatus.ONLINE;
          },
          wsClose: (state) => {
               state.status = WebsocketStatus.OFFLINE;
          },
          wsMessage: (state, action: PayloadAction<IDataFeed>) => {
               state.data = action.payload;
          },
          wsError: (state, action: PayloadAction<string>) => {
               state.connectionError = action.payload;
          },
     },
});
export default feedSlice.reducer;
export const { wsOpen, wsClose, wsMessage, wsError, wsConnection } = feedSlice.actions;
