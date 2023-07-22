import { useDispatch } from 'react-redux';
import { login, register, logout, editProfile } from '../../services/auth/auth';

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
     const editProfileInfo = async (data) => {
          return dispatch(editProfile(data));
     };
     return {
          signIn,
          signOut,
          registProfile,
          editProfileInfo,
     };
};
