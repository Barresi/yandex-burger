import { MiddlewareAPI } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { AppDispatch, RootState } from '../store';
import { wsClose, wsError, wsMessage, wsOpen } from '../slices/feed-web-socket/slice';
import { wsConnect, wsDisconnect } from '../slices/feed-web-socket/actions';

export const socketMiddleware = (wsUrl: string): Middleware => {
     return (store: MiddlewareAPI<AppDispatch, RootState>) => {
          let socket: WebSocket | null = null;

          return (next) => (action) => {
               const { dispatch } = store;

               if (wsConnect.match(action)) {
                    console.log('connection...');
                    socket = new WebSocket(wsUrl);
               }

               if (socket) {
                    socket.onopen = () => {
                         console.log('connect');
                         dispatch(wsOpen());
                    };

                    socket.onmessage = (event) => {
                         dispatch(wsMessage(JSON.parse(event.data)));
                    };

                    socket.onclose = (event) => {
                         if (event.code !== 1000) {
                              console.log('error', event.code);
                              dispatch(wsError(event.code.toString()));
                         }
                         dispatch(wsClose());
                    };

                    if (wsDisconnect.match(action)) {
                         console.log('disconnect');
                         socket.close();
                         dispatch(wsClose());
                    }
               }

               next(action);
          };
     };
};
