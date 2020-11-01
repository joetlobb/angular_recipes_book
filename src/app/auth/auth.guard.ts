import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import * as fromApp from '../store/app.reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    // return this.authService.user.pipe(
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user
      }),
      map(user => {
        const isAuth = !!user; // return false if not logged in
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
        //   return !!user; // return false if not logged in
        // }), tap(isAuth => {
        //   if (!isAuth) {
        //     this.router.navigate(['/auth']);
        //   }
      }));
  }
}