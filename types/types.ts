export interface RecipeResponse {
  recipes:Recipe[];
  total:number;
  skip:number;
  limit:number;
}
export interface Recipe {
  id:number;
  name:string;
  ingredients:string[];
  instructions:string[];
  prepTimeMinutes:string;
  image:string;
 
}
