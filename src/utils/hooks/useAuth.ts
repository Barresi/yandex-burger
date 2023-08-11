import { login, register, logout, editProfile } from '../../services/auth/auth';
import { IEditProfilePayload, ILogInPayload, IRegisterPayload } from '../../types/api-types';
import { useAppDispatch } from './redux-hook';

export const useAuth = () => {
     const dispatch = useAppDispatch();

     const signIn = async (data: ILogInPayload) => {
          return dispatch(login(data));
     };
     const signOut = async () => {
          return dispatch(logout());
     };
     const registProfile = async (data: IRegisterPayload) => {
          return dispatch(register(data));
     };
     const editProfileInfo = async (data: IEditProfilePayload) => {
          return dispatch(editProfile(data));
     };
     return {
          signIn,
          signOut,
          registProfile,
          editProfileInfo,
     } as const;
};
