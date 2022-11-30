import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeList {

  recipes: Recipe[] = [
    new Recipe('Testrecept', 'Dit is een test', 'https://cdn.pixabay.com/photo/2017/10/24/22/02/pumpkin-soup-2886322_1280.jpg')
  ]

}
