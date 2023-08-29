import { ActionCreatorWithPayload, ActionCreatorWithoutPayload, MiddlewareAPI } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { AppDispatch, RootState } from '../store';
import { IDataFeed } from '../../types/reducers/feed-web-socket';

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

          return (next) => (action) => {
               const { dispatch } = store;
               const { wsConnect, wsDisconnect, wsClose, wsConnecting, wsOpen, wsMessage, wsError } = wsActions;

               if (wsConnect.match(action)) {
                    dispatch(wsConnecting());
                    socket = new WebSocket(action.payload);
               }

               if (socket) {
                    socket.onopen = () => {
                         dispatch(wsOpen());
                    };

                    socket.onmessage = (event) => {
                         dispatch(wsMessage(JSON.parse(event.data)));
                    };

                    socket.onclose = (event) => {
                         if (event.code !== 1000) {
                              dispatch(wsError(event.code.toString()));
                         }

                         dispatch(wsClose());
                    };

                    if (wsDisconnect.match(action)) {
                         socket.close(1000, 'user logged out');
                         dispatch(wsClose());
                    }
               }

               next(action);
          };
     };
};
