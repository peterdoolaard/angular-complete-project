import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.html',
  styleUrls: ['./shopping-list-edit.css']
})

export class ShoppingListEdit {
  @Output() addIngredients = new EventEmitter<Ingredient>()
  @ViewChild('itemName', {static: true}) itemName: ElementRef
  @ViewChild('itemAmount', {static: true}) itemAmount: ElementRef

onClick() {
  this.addIngredients.emit(
    new Ingredient(
      this.itemName.nativeElement.value,
      this.itemAmount.nativeElement.value
    )
  )
}




}
