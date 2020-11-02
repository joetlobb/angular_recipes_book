// import { Subject } from 'rxjs';
// // import { EventEmitter } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model';

// export class ShoppingListService {
//   ingredientChanged = new Subject<Ingredient[]>();
//   startedEditing = new Subject<number>();

//   private ingredients: Ingredient[] = [
//     new Ingredient('Apple', 5),
//     new Ingredient('Tomato', 10)
//   ];

//   getIngredients() {
//     return this.ingredients.slice();
//   }

//   getIngredient(index: number) {
//     return this.ingredients[index];
//   }

//   addIngredient(ingredient: Ingredient) {
//     this.ingredients.push(ingredient);
//     this.ingredientChanged.next(this.ingredients.slice());
//   }

//   addIngredients(ingredients: Ingredient[]) {
//     // for (let ingredient of ingredients) {      // emit too much event should avoid
//     //   this.addIngredient(ingredient);
//     // }
//     this.ingredients.push(...ingredients);        // add arrays of objects
//     this.ingredientChanged.next(this.ingredients.slice());
//   }

//   updateIngredient(index: number, newIngredient: Ingredient) {
//     this.ingredients[index] = newIngredient;
//     this.ingredientChanged.next(this.ingredients.slice());
//   }

//   deleteIngredient(index: number) {
//     this.ingredients.splice(index, 1);
//     this.ingredientChanged.next(this.ingredients.slice());
//   }
// }