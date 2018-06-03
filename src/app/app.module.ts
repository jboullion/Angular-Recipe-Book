import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './shop/list/list.component';
import { EditComponent } from './shop/edit/edit.component';
import { IngredientComponent } from './shop/ingredient/ingredient.component';
import { ItemComponent } from './recipe/item/item.component';
import { DetailComponent } from './recipe/detail/detail.component';
import { CommentComponent } from './recipe/comment/comment.component';
import { RecipeComponent } from './recipe/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    EditComponent,
    IngredientComponent,
    ItemComponent,
    DetailComponent,
    CommentComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
