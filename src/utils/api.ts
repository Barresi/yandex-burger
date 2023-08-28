import {
     IEditProfilePayload,
     IForgotAndResetPassword,
     IGetAndEditProfileResponse,
     IIngredientsResponse,
     ILogAndRegProfileResponse,
     ILogInPayload,
     ILogoutResponse,
     IOrderResponse,
     IRefreshResponse,
     IRegisterPayload,
} from '../types/api-types';
import { getCookie, setCookie } from './cookie';

const URL = 'https://norma.nomoreparties.space/api';
export const allOrdersWsURL = 'wss://norma.nomoreparties.space/orders/all';
export const getProfileOrdersWsURL = () => {
     return `wss://norma.nomoreparties.space/orders?token=${getCookie('accessToken')?.slice(7)}`;
};

const checkResponse = <T>(response: Response): Promise<T> => {
     return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

export async function fetchDataIngredients() {
     const response = await fetch(`${URL}/ingredients`);
     return await checkResponse<IIngredientsResponse>(response);
}

export async function postDataIngredients(data: { ingredients: string[] }) {
     return await fetchWithRefresh<IOrderResponse>(`${URL}/orders`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
               authorization: getCookie('accessToken') as string,
          },
          body: JSON.stringify(data),
     }).then((data) => {
          if (data.success) return data;
          return Promise.reject(data);
     });
}

export async function sendEmail(email: string) {
     const response = await fetch(`${URL}/password-reset`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
     });
     return await checkResponse<IForgotAndResetPassword>(response);
}

export async function sendPassword(password: string, token: string) {
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
     return await checkResponse<IForgotAndResetPassword>(response);
}

export async function registerRequest(data: IRegisterPayload) {
     const response = await fetch(`${URL}/auth/register`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
     });
     return await checkResponse<ILogAndRegProfileResponse>(response);
}

export async function loginRequest(data: ILogInPayload) {
     const response = await fetch(`${URL}/auth/login`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
     });
     return await checkResponse<ILogAndRegProfileResponse>(response);
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
     return await checkResponse<ILogoutResponse>(response);
}

async function refreshRequest(): Promise<IRefreshResponse> {
     const response = await fetch(`${URL}/auth/token`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               token: getCookie('refreshToken'),
          }),
     });
     return await response.json();
}

export async function fetchWithRefresh<T>(url: RequestInfo, options: RequestInit) {
     try {
          const res = await fetch(url, options);
          return await checkResponse<T>(res);
     } catch (err) {
          if ((err as Error).message === 'jwt expired') {
               const refreshData = await refreshRequest();
               if (!refreshData.success) return Promise.reject(refreshData);
               setCookie('accessToken', refreshData.accessToken);
               setCookie('refreshToken', refreshData.refreshToken);
               (options.headers as { [key: string]: string }).authorization = refreshData.accessToken;
               const res = await fetch(url, options);
               return await checkResponse<T>(res);
          }
          return Promise.reject(err);
     }
}

export async function getProfileInfo() {
     return await fetchWithRefresh<IGetAndEditProfileResponse>(`${URL}/auth/user`, {
          method: 'GET',
          headers: {
               'Content-Type': 'application/json',
               authorization: getCookie('accessToken') as string,
          },
     }).then((data) => {
          if (data.success) return data;
          return Promise.reject(data);
     });
}

export async function editRequest(data: IEditProfilePayload) {
     return await fetchWithRefresh<IGetAndEditProfileResponse>(`${URL}/auth/user`, {
          method: 'PATCH',
          headers: {
               'Content-Type': 'application/json',
               authorization: getCookie('accessToken') as string,
          },
          body: JSON.stringify(data),
     }).then((data) => {
          if (data.success) return data;
          return Promise.reject(data);
     });
}
