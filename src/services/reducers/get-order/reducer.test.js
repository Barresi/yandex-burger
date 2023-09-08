import getOrderReducer, { getOrder, closeModal, setIsError, initialState } from './reducer';

describe('Заказ бургера', () => {
     it('Должно появиться initial state', () => {
          const state = undefined;
          const action = {};
          expect(getOrderReducer(state, action)).toEqual(initialState);
     });
     it('Должно закрыться модальное окно', () => {
          const state = { ...initialState, isActiveModal: true, order: 3452 };
          const action = { type: closeModal.type };
          expect(getOrderReducer(state, action)).toEqual(initialState);
     });
     it('Должно открыться модальное окно с текстом ошибки', () => {
          const state = initialState;
          const action = { type: setIsError.type, payload: 'Упс, что-то пошло не так(' };
          expect(getOrderReducer(state, action)).toEqual({
               ...initialState,
               isActiveModal: true,
               error: 'Упс, что-то пошло не так(',
          });
     });

     it('orderData/getDataOrder/pending', () => {
          const state = initialState;
          const action = getOrder.pending();
          expect(getOrderReducer(state, action)).toEqual({ ...initialState, isLoading: true });
     });
     it('orderData/getDataOrder/fulfilled', () => {
          const mockResponse = { order: { number: 4376 }, name: 'Флюоресцентный бургер', success: true };
          const state = { ...initialState, isLoading: true };
          const action = getOrder.fulfilled(mockResponse);
          expect(getOrderReducer(state, action)).toEqual({
               ...initialState,
               isActiveModal: true,
               order: 4376,
               burgerName: 'Флюоресцентный бургер',
          });
     });
     it('orderData/getDataOrder/rejected', () => {
          const state = { ...initialState, isLoading: true };
          const action = getOrder.rejected();
          expect(getOrderReducer(state, action)).toEqual({
               ...initialState,
               error: 'Connection has failed',
               isActiveModal: true,
          });
     });
});
