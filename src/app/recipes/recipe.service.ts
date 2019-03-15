import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://galleria.riza.it/files/thumbs/640x316c/2018-08/lenticchie-ricetta.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('A test recipe2', 'This is a test2', 'https://galleria.riza.it/files/thumbs/640x316c/2018-08/lenticchie-ricetta.jpg', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) {}


  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
