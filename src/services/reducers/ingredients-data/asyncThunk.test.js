import { getDataIngredients } from './reducer';

global.fetch = jest.fn();

describe('Получение данных о ингредиентах с сервера', () => {
     it('Должен пройти успешный запрос getDataIngredients', async () => {
          const mockResponse = {
               data: [{ _id: '643d69a5c3f7b9001cfa093c', name: 'Краторная булка N-200i', price: 1255 }],
               success: true,
          };
          fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockResponse) });
          const dispatch = jest.fn();
          const thunk = getDataIngredients();

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(getDataIngredients.pending().type);
          expect(end[0].type).toBe(getDataIngredients.fulfilled().type);
          expect(end[0].payload).toBe(mockResponse);
     });

     it('Должен упасть запрос getDataIngredients', async () => {
          const mockResponse = {
               data: [],
               success: false,
          };
          fetch.mockResolvedValue({ ok: false, json: () => Promise.reject() });
          const dispatch = jest.fn();
          const thunk = getDataIngredients();

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(getDataIngredients.pending().type);
          expect(end[0].type).toBe(getDataIngredients.rejected().type);
          expect(end[0].payload).toBe('Connection has failed');
     });
});
