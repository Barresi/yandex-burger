import { IIngredient } from '../ingredient';

interface IIngredients extends IIngredient {
     id: string;
}

export interface IInitialStateActiveItems {
     bun: IIngredient | null;
     ingredients: IIngredients[];
}
