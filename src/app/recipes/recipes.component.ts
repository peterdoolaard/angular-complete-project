import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipesService } from "../services/recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  @Input() navigateTo

  selectedRecipe: Recipe

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
      }
    )
  }
}
