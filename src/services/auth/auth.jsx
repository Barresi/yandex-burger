import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginRequest, logoutRequest, registerRequest, fetchWithRefresh, editRequest } from '../../utils/api';
import { deleteCookie, setCookie } from '../../utils/cookie';

const initialState = {
     user: {
          email: '',
          name: '',
     },
     isUserLoaded: false,
     isLoading: false,
};

export const register = createAsyncThunk('auth/register', async (data) => {
     const response = await registerRequest(data);
     return response;
});
export const login = createAsyncThunk('auth/login', async (data) => {
     const response = await loginRequest(data);
     return response;
});
export const logout = createAsyncThunk('auth/logout', async (refreshToken) => {
     const response = await logoutRequest(refreshToken);
     return response;
});
export const checkAuth = createAsyncThunk('auth/checkAuth', async (tokens) => {
     const response = await fetchWithRefresh(tokens);
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
          builder.addCase(login.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(login.fulfilled, (state, action) => {
               state.isLoading = false;
               if (action.payload?.success) {
                    state.user = {
                         email: action.payload.user.email,
                         name: action.payload.user.name,
                    };
                    state.isUserLoaded = true;
                    setCookie('accessToken', action.payload.accessToken);
                    setCookie('refreshToken', action.payload.refreshToken);
               }
          });

          builder.addCase(register.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(register.fulfilled, (state, action) => {
               state.isLoading = false;
               if (action.payload?.success) {
                    state.user = {
                         email: action.payload.user.email,
                         name: action.payload.user.name,
                    };
                    state.isUserLoaded = true;
                    setCookie('accessToken', action.payload.accessToken);
                    setCookie('refreshToken', action.payload.refreshToken);
               }
          });

          builder.addCase(logout.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(logout.fulfilled, (state, action) => {
               state.isLoading = false;
               if (action.payload?.success) {
                    state.user = {
                         email: '',
                         name: '',
                    };
                    state.isUserLoaded = false;
                    deleteCookie('accessToken');
                    deleteCookie('refreshToken');
               }
          });

          builder.addCase(checkAuth.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(checkAuth.rejected, (state) => {
               state.isLoading = false;
          });
          builder.addCase(checkAuth.fulfilled, (state, action) => {
               state.isLoading = false;
               if (action.payload?.success) {
                    state.user = {
                         email: action.payload.user.email,
                         name: action.payload.user.name,
                    };
                    state.isUserLoaded = true;
               }
          });

          builder.addCase(editProfile.pending, (state) => {
               state.isLoading = true;
          });
          builder.addCase(editProfile.fulfilled, (state, action) => {
               state.isLoading = false;
               if (action.payload?.success) {
                    state.user = {
                         email: action.payload.user.email,
                         name: action.payload.user.name,
                    };
               }
          });
     },
});

export default authSlice.reducer;
