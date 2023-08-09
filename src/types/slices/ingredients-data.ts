import { IIngredient } from '../ingredient';

export interface IIngredientsResponse {
     data: IIngredient[];
     success: boolean;
}

export interface IInitialStateIngredientsSlice {
     error: null | string;
     isLoading: boolean;
     ingredients: IIngredient[];
}
