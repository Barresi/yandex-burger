import { IIngredient } from './ingredient';

export interface IIngredientsResponse {
     data: IIngredient[];
     success: boolean;
}

interface IPersonInfo {
     name: string;
     email: string;
}

export interface IOrderResponse {
     name: string;
     order: {
          createdAt: string;
          number: number;
          ingredients: IIngredient[];
          name: string;
          price: number;
          status: string;
          updatedAt: string;
          _id: string;
          owner: {
               createdAt: string;
               email: string;
               name: string;
               updatedAt: string;
          };
     };
     success: boolean;
}

export interface ILogAndRegProfileResponse {
     user: IPersonInfo;
     refreshToken: string;
     accessToken: string;
     success: boolean;
}

export interface ILogInPayload {
     email: string;
     password: string;
}

export interface IRegisterPayload extends IPersonInfo {
     password: string;
}

export interface ILogoutResponse {
     message: string;
     success: boolean;
}

export interface IRefreshResponse {
     accessToken: string;
     refreshToken: string;
     success: boolean;
}

export interface IGetAndEditProfileResponse {
     success: boolean;
     user: IPersonInfo;
}

export interface IEditProfilePayload extends IPersonInfo {
     accessToken: string;
     password: string;
}

export interface IForgotAndResetPassword {
     message: string;
     success: string;
}
