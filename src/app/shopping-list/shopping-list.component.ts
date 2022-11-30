import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingList {
  ingredients: Ingredient[] = [
    new Ingredient('pepper', 4),
    new Ingredient('tomato', 6)
  ]

}
