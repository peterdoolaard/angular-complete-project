import { Component, Input } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingList {
  @Input() navigateTo

  ingredients: Ingredient[] = [
    new Ingredient('pepper', 4),
    new Ingredient('tomato', 6)
  ]

  onAddIngredients(ingredient) {
    this.ingredients.push(ingredient)
  }

}
