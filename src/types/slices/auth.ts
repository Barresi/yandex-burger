export interface IInitialStateAuth {
     user: {
          email: string;
          name: string;
     };
     isUserAuth: boolean;
     isLoading: boolean;
     isAuthChecked: boolean;
}
