import { createReducer } from '@reduxjs/toolkit';
import { IInitialStateFeed, WebsocketStatus } from '../../../types/reducers/feed-web-socket';
import { wsClose, wsConnecting, wsError, wsMessage, wsOpen } from './actions';

const initialState: IInitialStateFeed = {
     status: WebsocketStatus.OFFLINE,
     connectionError: '',
     data: null,
};

const profileFeedReducer = createReducer(initialState, (builder) => {
     builder
          .addCase(wsConnecting, (state) => {
               state.status = WebsocketStatus.CONNECTING;
          })
          .addCase(wsOpen, (state) => {
               state.status = WebsocketStatus.ONLINE;
               state.connectionError = '';
          })
          .addCase(wsClose, (state) => {
               state.status = WebsocketStatus.OFFLINE;
               state.data = null;
          })
          .addCase(wsError, (state, action) => {
               state.connectionError = action.payload;
          })
          .addCase(wsMessage, (state, action) => {
               state.data = action.payload;
          });
});

export default profileFeedReducer;
