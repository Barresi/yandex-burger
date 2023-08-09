export interface IInitialStateAuth {
     user: {
          email: string;
          name: string;
     };
     isUserAuth: boolean;
     isLoading: boolean;
     isAuthChecked: boolean;
}

export interface ISignInArg {
     email: string;
     password: string;
}
export interface IRegisterArg {
     name: string;
     email: string;
     password: string;
}
export interface IEditProfileArg {
     name: string;
     email: string;
     password: string;
     accessToken: string;
}

export interface IGetAndEditProfile {
     success: boolean;
     user: { name: string; email: string };
}

export interface ILogAndRegProfile {
     user: { email: string; name: string };
     refreshToken: string;
     accessToken: string;
     success: boolean;
}
