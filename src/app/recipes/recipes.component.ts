import { Component, Input } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent {

  recipe: Recipe

  @Input() navigateTo

  onPassDetails(event) {
    this.recipe = event
  }

}
