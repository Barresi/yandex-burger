import profileFeedReducer, { initialState } from './reducer';
import { wsClose, wsConnecting, wsError, wsMessage, wsOpen } from './actions';
import { WebsocketStatus } from '../../../types/reducers/feed-web-socket';

describe('Лента заказов конкретного профиля', () => {
     it('Должно появиться initial state', () => {
          const store = undefined;
          const action = {};
          expect(profileFeedReducer(store, action)).toEqual(initialState);
     });
     it('Должно начать устанавливаться websocket соединение', () => {
          const store = initialState;
          const action = { type: wsConnecting.type };
          expect(profileFeedReducer(store, action)).toEqual({ ...initialState, status: WebsocketStatus.CONNECTING });
     });
     it('Должно установиться websocket соединение', () => {
          const store = { ...initialState, status: WebsocketStatus.CONNECTING };
          const action = { type: wsOpen.type };
          expect(profileFeedReducer(store, action)).toEqual({ ...initialState, status: WebsocketStatus.ONLINE });
     });
     it('Должно закрыться websocket соединение', () => {
          const store = { ...initialState, status: WebsocketStatus.ONLINE };
          const action = { type: wsClose.type };
          expect(profileFeedReducer(store, action)).toEqual(initialState);
     });
     it('Должна записаться ошибка websocket соединения', () => {
          const store = { ...initialState, status: WebsocketStatus.ONLINE };
          const action = { type: wsError.type, payload: 'Что-то пошло не так(' };
          expect(profileFeedReducer(store, action)).toEqual({
               ...initialState,
               connectionError: 'Что-то пошло не так(',
               status: WebsocketStatus.ONLINE,
          });
     });
     it('Должно прийти сообщение с websocket соединения', () => {
          const store = { ...initialState, status: WebsocketStatus.ONLINE };
          const action = {
               type: wsMessage.type,
               payload: [{ _id: '643d69a5c3f7b9001cfa093c', name: 'Краторная булка N-200i', price: 1255 }],
          };
          expect(profileFeedReducer(store, action)).toEqual({
               ...initialState,
               data: [{ _id: '643d69a5c3f7b9001cfa093c', name: 'Краторная булка N-200i', price: 1255 }],
               status: WebsocketStatus.ONLINE,
          });
     });
});
