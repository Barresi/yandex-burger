const URL = 'https://norma.nomoreparties.space/api';

const checkResponse = (response) => {
     return response.ok ? response.json() : Promise.reject('Connection has failed');
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
     return await checkResponse(response);
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
     return await checkResponse(response);
}

export async function registerRequest({ name, email, password }) {
     console.log(name, email, password);
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
     console.log(response);
     return await checkResponse(response);
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
     console.log(response);
     return await checkResponse(response);
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
     return await checkResponse(response);
}

export async function refreshTokenRequest(refreshToken) {
     const response = await fetch(`${URL}/auth/token`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               token: refreshToken,
          }),
     });
     return await checkResponse(response);
}
