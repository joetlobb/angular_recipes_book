import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';
import * as RecipesActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(
    // private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select('recipes')
      .pipe(map(recipesState => recipesState.recipes))
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
    // this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onFetchData() {
    // this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipesActions.FetchRecipes());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
