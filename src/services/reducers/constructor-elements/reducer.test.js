import constructorReducer, {
     addIngredient,
     clearIngredients,
     deleteIngredient,
     moveIngredients,
     initialState,
} from './reducer';

const ingredientBun = {
     _id: '643d69a5c3f7b9001cfa093c',
     name: 'Краторная булка N-200i',
     type: 'bun',
     proteins: 20,
     fat: 43,
     carbohydrates: 23,
     calories: 43,
     price: 2343,
     image: 'https://code.s3.yandex.net/react/code/bun-02.png',
     image_mobile: 'https://code.s3.yandex.net/react/code/bun-02.png',
     image_large: 'https://code.s3.yandex.net/react/code/bun-02.png',
     __v: 0,
};
const ingredientSouce = {
     _id: '643d69a5c3f7b9001cfa0942',
     name: 'Соус Spicy-X',
     type: 'sauce',
     proteins: 20,
     fat: 43,
     carbohydrates: 23,
     calories: 43,
     price: 2343,
     image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
     image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02.png',
     image_large: 'https://code.s3.yandex.net/react/code/sauce-02.png',
     __v: 0,
};

describe('Конструктор ингредиентов', () => {
     it('Должно появиться initial state', () => {
          const state = undefined;
          const action = {};
          expect(constructorReducer(state, action)).toEqual(initialState);
     });

     it('Должнен появиться новый ингредиент (булка)', () => {
          const state = initialState;
          const action = { type: addIngredient.type, payload: ingredientBun };
          expect(constructorReducer(state, action)).toEqual({
               ...initialState,
               bun: ingredientBun,
          });
     });

     it('Должнен появиться новый ингредиент (соус)', () => {
          const state = initialState;
          const action = { type: addIngredient.type, payload: ingredientSouce };
          expect(constructorReducer(state, action).ingredients[0]._id).toEqual(ingredientSouce._id);
     });

     it('Должен очиститься state', () => {
          const state = {
               ...initialState,
               bun: ingredientBun,
          };
          const action = { type: clearIngredients.type };
          expect(constructorReducer(state, action)).toEqual(initialState);
     });

     it('Должен удалиться ингредиент', () => {
          const state = { bun: ingredientBun, ingredients: [{ ...ingredientSouce, id: '3424-fdds-324' }] };
          const action = { type: deleteIngredient.type, payload: '3424-fdds-324' };
          expect(constructorReducer(state, action)).toEqual({ ...initialState, bun: ingredientBun });
     });

     it('Должен переместиться ингредиент', () => {
          const state = {
               bun: ingredientBun,
               ingredients: ['643d69a5c3f7b9001cfa093f', '643d69a5c3f7b9001cfa094a', '643d69a5c3f7b9001cfa0944'],
          };
          const action = { type: moveIngredients.type, payload: { dragIndex: 2, hoverIndex: 1 } };
          expect(constructorReducer(state, action)).toEqual({
               bun: ingredientBun,
               ingredients: ['643d69a5c3f7b9001cfa093f', '643d69a5c3f7b9001cfa0944', '643d69a5c3f7b9001cfa094a'],
          });
     });
});
