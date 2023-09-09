import { getOrder } from './reducer';

global.fetch = jest.fn();

describe('Отправка запроса на заказ на сервер', () => {
     it('Должен пройти успешный запрос getOrder', async () => {
          const mockResponse = { order: { number: 4376 }, name: 'Флюоресцентный бургер', success: true };
          fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockResponse) });
          const dispatch = jest.fn();
          const thunk = getOrder({
               ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093c'],
          });

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(getOrder.pending().type);
          expect(end[0].type).toBe(getOrder.fulfilled().type);
          expect(end[0].payload).toBe(mockResponse);
     });

     it('Должен упасть запрос getOrder', async () => {
          fetch.mockResolvedValue({ ok: false, json: () => Promise.reject() });
          const dispatch = jest.fn();
          const thunk = getOrder({
               ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093c'],
          });

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(getOrder.pending().type);
          expect(end[0].type).toBe(getOrder.rejected().type);
     });
});
