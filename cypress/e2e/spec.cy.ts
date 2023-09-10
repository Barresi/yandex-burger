import '@4tw/cypress-drag-drop';
describe('Конструктор бургера', () => {
     it('Должен оформиться заказ', () => {
          cy.visit('/');
          cy.intercept('GET', 'ingredients', { fixture: 'data-ingredients.json' });
          cy.intercept('GET', 'user', { fixture: 'auth.json' });

          cy.get('[data-cy="dragitem-643d69a5c3f7b9001cfa093d"]').click();
          cy.contains('Детали ингредиента').should('exist').should('have.text', 'Детали ингредиента');
          cy.get('[data-cy="close-modal"]').click();

          cy.get('[data-cy="dragitem-643d69a5c3f7b9001cfa0940"]')
               .drag('[data-cy="dropzone"]')
               .then((success) => {
                    assert.isTrue(success);
               });
          cy.get('[data-cy="dragitem-643d69a5c3f7b9001cfa0949"]')
               .drag('[data-cy="dropzone"]')
               .then((success) => {
                    assert.isTrue(success);
               });
          cy.get('[data-cy="dragitem-643d69a5c3f7b9001cfa093d"]')
               .drag('[data-cy="dropzone"]')
               .then((success) => {
                    assert.isTrue(success);
               });

          cy.intercept('POST', 'orders', { fixture: 'order.json' });
          cy.get('[data-cy="btn-order"]').click();

          cy.contains('Заказ оформлен').should('exist').should('have.text', 'Заказ оформлен');
     });
});
