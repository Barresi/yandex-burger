import { ActionCreatorWithPayload, ActionCreatorWithoutPayload, MiddlewareAPI } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { AppDispatch, RootState } from '../store';
import { IDataFeed } from '../../types/reducers/feed-web-socket';
import { getProfileOrdersWsURL, refreshRequest } from '../../utils/api';

interface IWsActions {
     wsConnect: ActionCreatorWithPayload<string>;
     wsDisconnect: ActionCreatorWithoutPayload;
     wsClose: ActionCreatorWithoutPayload;
     wsConnecting: ActionCreatorWithoutPayload;
     wsOpen: ActionCreatorWithoutPayload;
     wsMessage: ActionCreatorWithPayload<IDataFeed>;
     wsError: ActionCreatorWithPayload<string>;
}

export const socketMiddleware = (wsActions: IWsActions): Middleware => {
     return (store: MiddlewareAPI<AppDispatch, RootState>) => {
          let socket: WebSocket | null = null;
          let isConnected = false;
          let reconnectTimer = 0;
          let url = '';

          return (next) => (action) => {
               const { dispatch } = store;
               const { wsConnect, wsDisconnect, wsClose, wsConnecting, wsOpen, wsMessage, wsError } = wsActions;

               if (wsConnect.match(action)) {
                    url = action.payload;
                    isConnected = true;
                    dispatch(wsConnecting());
                    socket = new WebSocket(url);
               }

               if (socket) {
                    socket.onopen = () => {
                         dispatch(wsOpen());
                    };

                    socket.onmessage = (event) => {
                         const parsedData = JSON.parse(event.data);
                         if (parsedData.success) {
                              dispatch(wsMessage(JSON.parse(event.data)));
                         } else {
                              if (parsedData.message === 'Invalid or missing token') {
                                   refreshRequest().then(() => {
                                        dispatch(wsConnect(getProfileOrdersWsURL()));
                                   });
                              }
                         }
                    };

                    socket.onclose = (event) => {
                         if (event.code !== 1000) {
                              dispatch(wsError(event.code.toString()));
                         }
                         dispatch(wsClose());

                         if (isConnected) {
                              reconnectTimer = window.setTimeout(() => {
                                   dispatch(wsConnect(url));
                              }, 3000);
                         }
                    };

                    if (wsDisconnect.match(action)) {
                         clearTimeout(reconnectTimer);
                         isConnected = false;
                         reconnectTimer = 0;
                         socket.close(1000, 'user logged out');
                         dispatch(wsClose());
                    }
               }

               next(action);
          };
     };
};
