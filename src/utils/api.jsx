import { setCookie } from './cookie';

const URL = 'https://norma.nomoreparties.space/api';

const checkResponse = (response) => {
     return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

export async function fetchDataIngredients() {
     const response = await fetch(`${URL}/ingredients`);
     return await checkResponse(response);
}

export async function postDataIngredients(data) {
     const response = await fetch(`${URL}/orders`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
     });
     return await checkResponse(response);
}

export async function sendEmail(email) {
     const response = await fetch(`${URL}/password-reset`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
     });
     return await response.json();
}

export async function sendPassword(password, token) {
     const response = await fetch(`${URL}/password-reset/reset`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               password: password,
               token: token,
          }),
     });
     return await response.json();
}

export async function registerRequest({ name, email, password }) {
     const response = await fetch(`${URL}/auth/register`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               name: name,
               email: email,
               password: password,
          }),
     });
     return await response.json();
}

export async function loginRequest({ email, password }) {
     const response = await fetch(`${URL}/auth/login`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               email: email,
               password: password,
          }),
     });
     return await response.json();
}

export async function logoutRequest(refreshToken) {
     const response = await fetch(`${URL}/auth/logout`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               token: refreshToken,
          }),
     });

     return await response.json();
}

export async function fetchWithRefresh(tokens) {
     const { accessToken, refreshToken } = tokens;
     const getData = async (tokenAccs) => {
          const response = await fetch(`${URL}/auth/user`, {
               method: 'GET',
               headers: {
                    'Content-Type': 'application/json',
                    authorization: tokenAccs,
               },
          });

          return await checkResponse(response);
     };
     try {
          return await getData(accessToken);
     } catch (err) {
          if (err.message === 'jwt expired') {
               const response = await fetch(`${URL}/auth/token`, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         token: refreshToken,
                    }),
               });
               const data = await response.json();

               if (data.success) {
                    setCookie('accessToken', data.accessToken);
                    setCookie('refreshToken', data.refreshToken);
                    return await getData(data.accessToken);
               } else {
                    return Promise.reject(err);
               }
          } else {
               return Promise.reject(err);
          }
     }
}

export async function editRequest(data) {
     const { name, email, password, accessToken } = data;
     const response = await fetch(`${URL}/auth/user`, {
          method: 'PATCH',
          headers: {
               'Content-Type': 'application/json',
               authorization: accessToken,
          },
          body: JSON.stringify({
               name: name,
               email: email,
               password: password,
          }),
     });

     return await response.json();
}
