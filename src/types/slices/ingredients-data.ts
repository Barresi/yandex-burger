import { IIngredient } from '../ingredient';

export interface IInitialStateIngredientsSlice {
     error: null | string;
     isLoading: boolean;
     ingredients: IIngredient[];
}
