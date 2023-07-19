import { useDispatch } from 'react-redux';
import { login, register, logout, checkAuth, editProfile } from '../../services/auth/auth';

export const useAuth = () => {
     const dispatch = useDispatch();

     const signIn = async (data) => {
          return dispatch(login(data));
     };
     const signOut = async (refreshToken) => {
          return dispatch(logout(refreshToken));
     };
     const registProfile = async (data) => {
          return dispatch(register(data));
     };
     const checkUserAuth = async (tokens) => {
          return dispatch(checkAuth(tokens));
     };
     const editProfileInfo = async (data) => {
          return dispatch(editProfile(data));
     };
     return {
          signIn,
          signOut,
          registProfile,
          checkUserAuth,
          editProfileInfo,
     };
};
