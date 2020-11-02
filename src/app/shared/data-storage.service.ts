import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient,
    private store: Store<fromApp.AppState>) {
  }

  // storeRecipes() {
  //   const recipes = this.recipeService.getRecipes();
  //   this.http.put('https://my-angular-project1-recipe.firebaseio.com/recipes.json',
  //     recipes).subscribe(response => {
  //       console.log(response);
  //     });
  //   // ...
  // }

  // fetchRecipes() {
  //   return this.http
  //     .get<Recipe[]>(
  //       // 'https://my-angular-project1-recipe.firebaseio.com/recipes.json?auth=' + user.token);
  //       'https://my-angular-project1-recipe.firebaseio.com/recipes.json')
  //     .pipe(
  //       map(recipes => {
  //         return recipes.map(recipe => {
  //           return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
  //         });
  //       }), tap(recipes => {
  //         // this.recipeService.setRecipes(recipes);
  //         this.store.dispatch(new RecipesActions.SetRecipes(recipes));
  //       }));
  // }
}