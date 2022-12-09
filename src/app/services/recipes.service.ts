import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({providedIn: 'root'})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pumkin soup',
      'Dit is een test',
      'https://cdn.pixabay.com/photo/2017/10/24/22/02/pumpkin-soup-2886322_1280.jpg',
      [
        new Ingredient('pumpkin', 1),
        new Ingredient('pepper', 1),
        new Ingredient( 'herbs', 3)
      ]),
    new Recipe(
      'Roasted sheep',
      'Ook een test',
      'https://cdn.pixabay.com/photo/2017/10/24/22/02/pumpkin-soup-2886322_1280.jpg',
      [
        new Ingredient('sheep', 1),
        new Ingredient('vegetables', 4),
        new Ingredient('herbs', 6)
      ])
  ]

  selectedRecipe = new EventEmitter<Recipe>()

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.setIngredients(ingredients)
  }

}
