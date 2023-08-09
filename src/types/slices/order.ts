import { IIngredient } from '../ingredient';

export interface IOrderResponse {
     name: string;
     order: {
          createdAt: string;
          number: number;
          ingredients: IIngredient;
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

export interface IInitialStateOrderSlice {
     order: number | null;
     error: string | null;
     isLoading: boolean;
     burgerName: string | null;
     isActiveModal: boolean;
}
