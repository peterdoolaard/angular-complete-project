import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class ShoppingListService {

  private ingredients: Ingredient[] = [

  ]

  ingredientsChanged = new EventEmitter<Ingredient[]>()

  getIngredients() {
    return this.ingredients.slice()
  }

  setIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
  }


}
