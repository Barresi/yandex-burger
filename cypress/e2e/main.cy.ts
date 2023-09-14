import '@4tw/cypress-drag-drop';
describe('Конструктор бургера', () => {
     it('Должен оформиться заказ', () => {
          cy.visit('/');
          cy.intercept('GET', 'ingredients', { fixture: 'data-ingredients.json' });
          cy.intercept('GET', 'user', { fixture: 'auth.json' });

          cy.get('[data-cy="dragitem-643d69a5c3f7b9001cfa093d"]').as('ingredient1');
          cy.get('[data-cy="dragitem-643d69a5c3f7b9001cfa0940"]').as('ingredient2');
          cy.get('[data-cy="dragitem-643d69a5c3f7b9001cfa0949"]').as('ingredient3');

          cy.get('@ingredient1').click();
          cy.contains('Детали ингредиента').should('exist').should('have.text', 'Детали ингредиента');
          cy.get('[data-cy="close-modal"]').as('close-modal-btn');
          cy.get('@close-modal-btn').click();

          cy.get('@ingredient2')
               .drag('[data-cy="dropzone"]')
               .then((success) => {
                    assert.isTrue(success);
               });

          cy.get('@ingredient3')
               .drag('[data-cy="dropzone"]')
               .then((success) => {
                    assert.isTrue(success);
               });
          cy.get('@ingredient1')
               .drag('[data-cy="dropzone"]')
               .then((success) => {
                    assert.isTrue(success);
               });

          cy.intercept('POST', 'orders', { fixture: 'order.json' });
          cy.get('[data-cy="btn-order"]').as('order-btn');
          cy.get('@order-btn').click();

          cy.contains('Заказ оформлен').should('exist').should('have.text', 'Заказ оформлен');
     });
});
