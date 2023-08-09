import { login, register, logout, editProfile } from '../../services/auth/auth';
import { IEditProfileArg, IRegisterArg, ISignInArg } from '../../types/slices/auth';
import { useAppDispatch } from './redux-hook';

export const useAuth = () => {
     const dispatch = useAppDispatch();

     const signIn = async (data: ISignInArg) => {
          return dispatch(login(data));
     };
     const signOut = async () => {
          return dispatch(logout());
     };
     const registProfile = async (data: IRegisterArg) => {
          return dispatch(register(data));
     };
     const editProfileInfo = async (data: IEditProfileArg) => {
          return dispatch(editProfile(data));
     };
     return {
          signIn,
          signOut,
          registProfile,
          editProfileInfo,
     } as const;
};
