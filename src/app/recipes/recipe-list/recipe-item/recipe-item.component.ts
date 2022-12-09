import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeDetail } from "../../recipe-detail/recipe-detail.component";
import { RecipesService } from "../../../services/recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItem implements OnInit {
  @Input() recipe: Recipe

  recipes: Recipe[]

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes()
  }

  onSelect() {
    this.recipesService.selectedRecipe.emit(this.recipe)
  }
}
