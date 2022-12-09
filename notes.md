# Notes

## Recipes service

### Purpose

- central storage of recipes
- supply a working copy to protect the original 
- supply one central event emitter to pass selected recipe around

### Summary

- load the service in the list.component for display with list-item.component

1. Create the service
```services/recipes.service.ts```

- Add the recipes array and make it private to prevent direct access

````  private recipes: Recipe[] = [...]````

- Create a function that makes a working copy of the recipes array


    getRecipes() {
      return this.recipes.slice()
    }

2. Load the recipes service and the copy of the recipes array in recipe-list.component


    export class RecipeList implements OnInit {

      recipes: Recipe[]

      constructor(private recipesService: RecipesService) {
      }

      ngOnInit() {
        this.recipes = this.recipesService.getRecipes()
      }
    }

3. Load the service in recipes-list-item. Get the recipe from the HTML-ref. Emit the selected item onClick


    export class RecipeItem {
      
      @Input() recipe: Recipe

      constructor(private recipesService: RecipesService) {
      }

      onSelect() {
        this.recipesService.selectedRecipe.emit(this.recipe)
      }
    }

4. In the service, define the event

    selectedRecipe = new EventEmitter<Recipe>()

5. Load the service in recipes.component and subscribe to the event, which holds the selected recipe

    export class RecipesComponent implements OnInit {

      selectedRecipe: Recipe

      constructor(private recipeService: RecipesService) {
      }

    ngOnInit() {
      this.recipeService.selectedRecipe.subscribe(
        (recipe: Recipe) => {
        this.selectedRecipe = recipe
      })
    }
  }
  
- In recipes.component.html recipe.detail receives the recipe

````    <app-recipe-detail````
````      *ngIf="selectedRecipe; else infotext"````
````      [recipe]="selectedRecipe"````
````    >````
````    </app-recipe-detail>````
 
