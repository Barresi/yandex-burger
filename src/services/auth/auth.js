import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginRequest, logoutRequest, registerRequest, editRequest, getProfileInfo } from '../../utils/api';
import { deleteCookie, setCookie } from '../../utils/cookie';

const initialState = {
     user: {
          email: '',
          name: '',
     },
     isUserAuth: false,
     isLoading: false,
     isAuthChecked: false,
};

export const register = createAsyncThunk('auth/register', async (data) => {
     const response = await registerRequest(data);
     return response;
});
export const login = createAsyncThunk('auth/login', async (data) => {
     const response = await loginRequest(data);
     return response;
});
export const logout = createAsyncThunk('auth/logout', async () => {
     const response = await logoutRequest();
     return response;
});
export const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
     const response = await getProfileInfo();
     return response;
});
export const editProfile = createAsyncThunk('auth/editProfile', async (data) => {
     const response = await editRequest(data);
     return response;
});

const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          //LogIn
          builder.addCase(login.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(login.rejected, (state) => {
               state.isLoading = false;
          });
          builder.addCase(login.fulfilled, (state, action) => {
               state.isLoading = false;

               state.user = {
                    email: action.payload.user.email,
                    name: action.payload.user.name,
               };
               state.isUserAuth = true;
               setCookie('accessToken', action.payload.accessToken);
               setCookie('refreshToken', action.payload.refreshToken);
          });
          //Registration
          builder.addCase(register.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(register.rejected, (state) => {
               state.isLoading = false;
          });
          builder.addCase(register.fulfilled, (state, action) => {
               state.isLoading = false;

               state.user = {
                    email: action.payload.user.email,
                    name: action.payload.user.name,
               };
               state.isUserAuth = true;
               setCookie('accessToken', action.payload.accessToken);
               setCookie('refreshToken', action.payload.refreshToken);
          });
          //LogOut
          builder.addCase(logout.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(logout.rejected, (state) => {
               state.isLoading = false;
          });
          builder.addCase(logout.fulfilled, (state, action) => {
               state.isLoading = false;

               state.user = {
                    email: '',
                    name: '',
               };
               state.isUserAuth = false;
               deleteCookie('accessToken');
               deleteCookie('refreshToken');
          });
          //CheckAuthenticity
          builder.addCase(getUserInfo.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(getUserInfo.rejected, (state) => {
               state.isLoading = false;
               state.isAuthChecked = true;
          });
          builder.addCase(getUserInfo.fulfilled, (state, action) => {
               state.isLoading = false;

               state.user = {
                    email: action.payload.user.email,
                    name: action.payload.user.name,
               };
               state.isAuthChecked = true;
               state.isUserAuth = true;
          });
          //EditProfileInfo
          builder.addCase(editProfile.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(editProfile.rejected, (state) => {
               state.isLoading = false;
          });
          builder.addCase(editProfile.fulfilled, (state, action) => {
               state.isLoading = false;
               state.user = {
                    email: action.payload.user.email,
                    name: action.payload.user.name,
               };
          });
     },
});

export default authSlice.reducer;
