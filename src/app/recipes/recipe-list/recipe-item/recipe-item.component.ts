import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeDetail } from "../../recipe-detail/recipe-detail.component";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItem {
  @Input() recipe: Recipe
  @Output() showDetails = new EventEmitter<Recipe>()

  onClick() {
    this.showDetails.emit(this.recipe)
  }

}
