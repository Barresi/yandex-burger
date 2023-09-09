import { editProfile, getUserInfo, login, logout, register } from './reducer';

global.fetch = jest.fn();

describe('Запросы авторизации', () => {
     it('Должен пройти успешный запрос register', async () => {
          const mockResponse = {
               success: true,
               user: { email: 'arhcfsdfdsfd.php@gmail.com', name: 'fdsfds' },
          };
          fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockResponse) });
          const dispatch = jest.fn();
          const thunk = register({ email: 'arhcfsdfdsfd.php@gmail.com', name: 'fdsfds', password: 'password' });

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(register.pending().type);
          expect(end[0].type).toBe(register.fulfilled().type);
          expect(end[0].payload).toBe(mockResponse);
     });
     it('Должен упасть запрос register', async () => {
          fetch.mockResolvedValue({ ok: false, json: () => Promise.reject() });
          const dispatch = jest.fn();
          const thunk = register({ email: 'arhcfsdfdsfd.php@gmail.com', name: 'fdsfds', password: 'password' });

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(register.pending().type);
          expect(end[0].type).toBe(register.rejected().type);
     });

     it('Должен пройти успешный запрос login', async () => {
          const mockResponse = {
               success: true,
               user: { email: 'arhcfsdfdsfd.php@gmail.com', name: 'fdsfds' },
          };
          fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockResponse) });
          const dispatch = jest.fn();
          const thunk = login({ email: 'arhcfsdfdsfd@gmail.com', password: 'password' });

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(login.pending().type);
          expect(end[0].type).toBe(login.fulfilled().type);
          expect(end[0].payload).toBe(mockResponse);
     });
     it('Должен упасть запрос login', async () => {
          fetch.mockResolvedValue({ ok: false, json: () => Promise.reject() });
          const dispatch = jest.fn();
          const thunk = login({ email: 'arhcfsdfdsfd.php@gmail.com', password: 'password' });

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(login.pending().type);
          expect(end[0].type).toBe(login.rejected().type);
     });

     it('Должен пройти успешный запрос logout', async () => {
          const mockResponse = {
               message: 'Successful logout',
               success: true,
          };
          fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockResponse) });
          const dispatch = jest.fn();
          const thunk = logout();

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(logout.pending().type);
          expect(end[0].type).toBe(logout.fulfilled().type);
          expect(end[0].payload).toBe(mockResponse);
     });
     it('Должен упасть запрос logout', async () => {
          fetch.mockResolvedValue({ ok: false, json: () => Promise.reject() });
          const dispatch = jest.fn();
          const thunk = logout();

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(logout.pending().type);
          expect(end[0].type).toBe(logout.rejected().type);
     });

     it('Должен пройти успешный запрос editProfile', async () => {
          const mockResponse = {
               user: {
                    email: 'arhcfsdfdsfd.php@gmail.com',
                    name: 'fdsfds',
               },
               success: true,
          };
          fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockResponse) });
          const dispatch = jest.fn();
          const thunk = editProfile({
               email: 'arhcfsdfdsfd.php@gmail.com',
               name: 'fdsfds',
               password: 'password',
          });

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(editProfile.pending().type);
          expect(end[0].type).toBe(editProfile.fulfilled().type);
          expect(end[0].payload).toBe(mockResponse);
     });
     it('Должен упасть запрос editProfile', async () => {
          fetch.mockResolvedValue({ ok: false, json: () => Promise.reject() });
          const dispatch = jest.fn();
          const thunk = editProfile({
               email: 'arhcfsdfdsfd.php@gmail.com',
               name: 'fdsfds',
               password: 'password',
          });

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(editProfile.pending().type);
          expect(end[0].type).toBe(editProfile.rejected().type);
     });

     it('Должен пройти успешный запрос getUserInfo', async () => {
          const mockResponse = {
               user: {
                    email: 'arhcfsdfdsfd.php@gmail.com',
                    name: 'fdsfds',
               },
               success: true,
          };
          fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockResponse) });
          const dispatch = jest.fn();
          const thunk = getUserInfo();

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(getUserInfo.pending().type);
          expect(end[0].type).toBe(getUserInfo.fulfilled().type);
          expect(end[0].payload).toBe(mockResponse);
     });
     it('Должен упасть запрос getUserInfo', async () => {
          fetch.mockResolvedValue({ ok: false, json: () => Promise.reject() });
          const dispatch = jest.fn();
          const thunk = getUserInfo();

          await thunk(dispatch);

          const { calls } = dispatch.mock;
          expect(calls).toHaveLength(2);

          const [start, end] = calls;
          expect(start[0].type).toBe(getUserInfo.pending().type);
          expect(end[0].type).toBe(getUserInfo.rejected().type);
     });
});
