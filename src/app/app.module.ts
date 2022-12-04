import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingList } from "./shopping-list/shopping-list.component";
import { RecipeList } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetail } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItem } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListEdit } from "./shopping-list/shopping-list-edit/shopping-list-edit";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingList,
    RecipeList,
    RecipeDetail,
    RecipeItem,
    ShoppingListEdit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
