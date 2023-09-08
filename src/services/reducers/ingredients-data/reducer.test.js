import ingredientsReducer, {
     clearQuantity,
     decrementQuantity,
     deleteError,
     incrementQuantity,
     getDataIngredients,
     initialState,
} from './reducer';

describe('Список всех ингредиентов', () => {
     it('Должно появиться initial state', () => {
          const state = undefined;
          const action = {};
          expect(ingredientsReducer(state, action)).toEqual(initialState);
     });
     it('Должна удалиться ошибка', () => {
          const state = { ...initialState, error: 'Что-то пошло не так :(' };
          const action = { type: deleteError.type };
          expect(ingredientsReducer(state, action)).toEqual(initialState);
     });
     it('Должны очиститься все бейджи count ингредиентов', () => {
          const state = { ...initialState, ingredients: [{ _id: '643d69a5c3f7b9001cfa093c', __v: 2 }] };
          const action = { type: clearQuantity.type };
          expect(ingredientsReducer(state, action)).toEqual({
               ...initialState,
               ingredients: [{ _id: '643d69a5c3f7b9001cfa093c', __v: 0 }],
          });
     });
     it('Должнен добавиться +1 count в бейдже', () => {
          const state = { ...initialState, ingredients: [{ _id: '643d69a5c3f7b9001cfa0942', __v: 2, type: 'sauce' }] };
          const action = {
               type: incrementQuantity.type,
               payload: { _id: '643d69a5c3f7b9001cfa0942', __v: 2, type: 'sauce' },
          };
          expect(ingredientsReducer(state, action)).toEqual({
               ...initialState,
               ingredients: [{ _id: '643d69a5c3f7b9001cfa0942', __v: 3, type: 'sauce' }],
          });
     });
     it('Должнен убавиться -1 count в бейдже', () => {
          const state = { ...initialState, ingredients: [{ _id: '643d69a5c3f7b9001cfa0942', __v: 2, type: 'sauce' }] };
          const action = {
               type: decrementQuantity.type,
               payload: '643d69a5c3f7b9001cfa0942',
          };
          expect(ingredientsReducer(state, action)).toEqual({
               ...initialState,
               ingredients: [{ _id: '643d69a5c3f7b9001cfa0942', __v: 1, type: 'sauce' }],
          });
     });

     it('ingredients/getDataIngredients/pending', () => {
          const state = initialState;
          const action = getDataIngredients.pending();
          expect(ingredientsReducer(state, action)).toEqual({ ...initialState, isLoading: true });
     });
     it('ingredients/getDataIngredients/fulfilled', () => {
          const state = { ...initialState, isLoading: true };
          const action = getDataIngredients.fulfilled({
               data: [{ _id: '643d69a5c3f7b9001cfa0942', __v: 0, type: 'sauce' }],
          });
          expect(ingredientsReducer(state, action)).toEqual({
               ...initialState,
               ingredients: [{ _id: '643d69a5c3f7b9001cfa0942', __v: 0, type: 'sauce' }],
          });
     });
     it('ingredients/getDataIngredients/rejected', () => {
          const state = { ...initialState, isLoading: true };
          const action = getDataIngredients.rejected();
          expect(ingredientsReducer(state, action)).toEqual({ ...initialState, error: 'Что-то пошло не так :(' });
     });
});
