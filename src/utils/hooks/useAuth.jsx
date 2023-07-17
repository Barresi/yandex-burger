import { useDispatch } from 'react-redux';
import { login, register, logout, updateToken } from '../../services/auth/auth';

export const useAuth = () => {
     const dispatch = useDispatch();

     const signIn = async (data) => {
          dispatch(login(data));
     };
     const signOut = async (refreshToken) => {
          dispatch(logout(refreshToken));
     };
     const registProfile = async (data) => {
          dispatch(register(data));
     };
     const refreshTokenProfile = async (refreshToken) => {
          dispatch(updateToken(refreshToken));
     };
     return {
          signIn,
          signOut,
          registProfile,
          refreshTokenProfile,
     };
};
