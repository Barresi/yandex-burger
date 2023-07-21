import { useDispatch } from 'react-redux';
import { login, register, logout, getUserInfo, editProfile } from '../../services/auth/auth';

export const useAuth = () => {
     const dispatch = useDispatch();

     const signIn = async (data) => {
          return dispatch(login(data));
     };
     const signOut = async () => {
          return dispatch(logout());
     };
     const registProfile = async (data) => {
          return dispatch(register(data));
     };
     const getUser = async () => {
          return dispatch(getUserInfo());
     };
     const editProfileInfo = async (data) => {
          return dispatch(editProfile(data));
     };
     return {
          signIn,
          signOut,
          registProfile,
          getUser,
          editProfileInfo,
     };
};
