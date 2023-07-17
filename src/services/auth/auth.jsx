import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginRequest, logoutRequest, refreshTokenRequest, registerRequest } from '../../utils/api';

const initialState = {
     user: {
          email: 'test-data@yandex.ru',
          name: 'Username',
     },
     accessToken: '',
     refreshToken: '',
};

export const register = createAsyncThunk('auth/register', async (data) => {
     const response = await registerRequest(data);
     return response;
});
export const login = createAsyncThunk('auth/login', async (data) => {
     const response = await loginRequest(data);
     return response;
});
export const logout = createAsyncThunk('auth/logout', async (token) => {
     const response = await logoutRequest(token);
     return response;
});
export const updateToken = createAsyncThunk('auth/token', async (token) => {
     const response = await refreshTokenRequest(token);
     return response;
});

const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder.addCase(login.fulfilled, (state, action) => {
               console.log(action.payload);
          });
          builder.addCase(register.fulfilled, (state, action) => {
               console.log(action.payload);
          });
          builder.addCase(logout.fulfilled, (state, action) => {
               console.log(action.payload);
          });
          builder.addCase(updateToken.fulfilled, (state, action) => {
               console.log(action.payload);
          });
     },
});

export default authSlice.reducer;
