import { Component, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../services/shopping-list.service";


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.html',
  styleUrls: ['./shopping-list-edit.css']
})

export class ShoppingListEdit {
  @ViewChild('itemName', {static: true}) itemName: ElementRef
  @ViewChild('itemAmount', {static: true}) itemAmount: ElementRef

  constructor(private shoppingListService: ShoppingListService) {
  }

onAddIngredients() {
  this.shoppingListService.setIngredient(
    new Ingredient(
      this.itemName.nativeElement.value,
      this.itemAmount.nativeElement.value
    )
  )
}




}
