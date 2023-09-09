import authReducer, { editProfile, getUserInfo, login, logout, register, initialState } from './reducer';

describe('Авторизация', () => {
     it('Должно появиться initial state', () => {
          const state = undefined;
          const action = {};
          expect(authReducer(state, action)).toEqual(initialState);
     });

     it('auth/getUserInfo/pending', () => {
          const state = initialState;
          const action = getUserInfo.pending();
          expect(authReducer(state, action)).toEqual({ ...initialState, isLoading: true });
     });
     it('auth/getUserInfo/fulfilled', () => {
          const state = { ...initialState, isLoading: true };
          const action = getUserInfo.fulfilled({ user: { name: 'Petya', email: 'dsada@mail.ru' } });
          expect(authReducer(state, action)).toEqual({
               ...initialState,
               isLoading: false,
               isAuthChecked: true,
               isUserAuth: true,
               user: {
                    name: 'Petya',
                    email: 'dsada@mail.ru',
               },
          });
     });
     it('auth/getUserInfo/rejected', () => {
          const state = { ...initialState, isLoading: true };
          const action = getUserInfo.rejected();
          expect(authReducer(state, action)).toEqual({ ...initialState, isAuthChecked: true });
     });

     it('auth/editProfile/pending', () => {
          const state = initialState;
          const action = editProfile.pending();
          expect(authReducer(state, action)).toEqual({ ...initialState, isLoading: true });
     });
     it('auth/editProfile/fulfilled', () => {
          const state = { ...initialState, isLoading: true };
          const action = editProfile.fulfilled({ user: { name: 'Petya', email: 'dsada@mail.ru' } });
          expect(authReducer(state, action)).toEqual({
               ...initialState,
               user: {
                    name: 'Petya',
                    email: 'dsada@mail.ru',
               },
          });
     });
     it('auth/editProfile/rejected', () => {
          const state = { ...initialState, isLoading: true };
          const action = editProfile.rejected();
          expect(authReducer(state, action)).toEqual(initialState);
     });

     it('auth/login/pending', () => {
          const state = initialState;
          const action = login.pending();
          expect(authReducer(state, action)).toEqual({ ...initialState, isLoading: true });
     });
     it('auth/login/fulfilled', () => {
          const state = { ...initialState, isLoading: true };
          const action = login.fulfilled({ user: { name: 'Petya', email: 'dsada@mail.ru' } });
          expect(authReducer(state, action)).toEqual({
               ...initialState,
               isUserAuth: true,
               user: {
                    name: 'Petya',
                    email: 'dsada@mail.ru',
               },
          });
     });
     it('auth/login/rejected', () => {
          const state = { ...initialState, isLoading: true };
          const action = login.rejected();
          expect(authReducer(state, action)).toEqual(initialState);
     });

     it('auth/register/pending', () => {
          const state = initialState;
          const action = register.pending();
          expect(authReducer(state, action)).toEqual({ ...initialState, isLoading: true });
     });
     it('auth/register/fulfilled', () => {
          const state = { ...initialState, isLoading: true };
          const action = register.fulfilled({ user: { name: 'Petya', email: 'dsada@mail.ru' } });
          expect(authReducer(state, action)).toEqual({
               ...initialState,
               isUserAuth: true,
               user: {
                    name: 'Petya',
                    email: 'dsada@mail.ru',
               },
          });
     });
     it('auth/register/rejected', () => {
          const state = { ...initialState, isLoading: true };
          const action = register.rejected();
          expect(authReducer(state, action)).toEqual(initialState);
     });

     it('auth/logout/pending', () => {
          const state = initialState;
          const action = logout.pending();
          expect(authReducer(state, action)).toEqual({ ...initialState, isLoading: true });
     });
     it('auth/logout/fulfilled', () => {
          const state = { ...initialState, isLoading: true };
          const action = logout.fulfilled({ user: { name: 'Petya', email: 'dsada@mail.ru' } });
          expect(authReducer(state, action)).toEqual({
               ...initialState,
               isUserAuth: false,
               user: {
                    name: '',
                    email: '',
               },
          });
     });
     it('auth/logout/rejected', () => {
          const state = { ...initialState, isLoading: true };
          const action = logout.rejected();
          expect(authReducer(state, action)).toEqual(initialState);
     });
});
