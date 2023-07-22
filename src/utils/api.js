import { getCookie, setCookie } from './cookie';

const URL = 'https://norma.nomoreparties.space/api';

const checkResponse = (response) => {
     return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

export async function fetchDataIngredients() {
     const response = await fetch(`${URL}/ingredients`);
     return await checkResponse(response);
}

export async function postDataIngredients(data) {
     return await fetchWithRefresh(`${URL}/orders`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
               authorization: getCookie('accessToken'),
          },
          body: JSON.stringify(data),
     }).then((data) => {
          if (data.success) {
               return data;
          }
          return Promise.reject(data);
     });
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

export async function registerRequest(data) {
     const response = await fetch(`${URL}/auth/register`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
     });
     return await checkResponse(response);
}

export async function loginRequest(data) {
     const response = await fetch(`${URL}/auth/login`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
     });
     return await checkResponse(response);
}

export async function logoutRequest() {
     const response = await fetch(`${URL}/auth/logout`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               token: getCookie('refreshToken'),
          }),
     });

     return await checkResponse(response);
}

export async function fetchWithRefresh(url, options) {
     try {
          const res = await fetch(url, options);
          return await checkResponse(res);
     } catch (err) {
          if (err.message !== 'jwt expired') {
               const refreshRes = await fetch(`${URL}/auth/token`, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         token: getCookie('refreshToken'),
                    }),
               });
               const refreshData = await refreshRes.json();
               if (!refreshData.success) return Promise.reject(refreshData);
               setCookie('accessToken', refreshData.accessToken);
               setCookie('refreshToken', refreshData.refreshToken);
               options.headers.authorization = refreshData.accessToken;
               const res = await fetch(url, options);
               return await checkResponse(res);
          }
          return Promise.reject(err);
     }
}

export async function getProfileInfo() {
     return await fetchWithRefresh(`${URL}/auth/user`, {
          method: 'GET',
          headers: {
               'Content-Type': 'application/json',
               authorization: getCookie('accessToken'),
          },
     }).then((data) => {
          if (data.success) {
               return data;
          }
          return Promise.reject(data);
     });
}

export async function editRequest(data) {
     return await fetchWithRefresh(`${URL}/auth/user`, {
          method: 'PATCH',
          headers: {
               'Content-Type': 'application/json',
               authorization: getCookie('accessToken'),
          },
          body: JSON.stringify(data),
     }).then((data) => {
          if (data.success) {
               return data;
          }
          return Promise.reject(data);
     });
}
