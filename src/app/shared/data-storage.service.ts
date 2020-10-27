import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { pipe } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://my-angular-project1-recipe.firebaseio.com/recipes.json',
      recipes).subscribe(response => {
        console.log(response);
      });
    // ...
  }

    fetchRecipes() {
      return this.http
        .get<Recipe[]>(
          // 'https://my-angular-project1-recipe.firebaseio.com/recipes.json?auth=' + user.token);
          'https://my-angular-project1-recipe.firebaseio.com/recipes.json')
        .pipe(
          map(recipes => {
            return recipes.map(recipe => {
              return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
            });
          }), tap(recipes => {
            this.recipeService.setRecipes(recipes);
          }));
    }
  // .subscribe(
  //   recipes => {
  //     console.log(recipes);
  //     this.recipeService.setRecipes(recipes);
  //   }
  // );
  // }
}