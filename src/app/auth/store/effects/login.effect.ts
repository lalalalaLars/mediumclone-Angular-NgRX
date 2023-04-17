// This file contains the implementation of LoginEffect class which is responsible for handling login related side-effects
// including network request to authenticate user, setting access token in local storage, and redirecting to home page on successful login.

import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/auth/store/actions/login.action';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffect {
  // Effect to handle the login action.
  login$ = createEffect(() =>
    this.actions$.pipe(
      // Subscribe to the login action only.
      ofType(loginAction),
      switchMap(({ request }) => {
        // Call the login API using AuthService and handle response using RxJS operators.
        return this.authService.login(request).pipe(
          // Save access token in local storage on successful login and dispatch loginSuccessAction.
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),

          // Dispatch loginFailureAction on error.
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  // Effect to redirect user to home page on successful login.
  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        // Subscribe to the login success action only.
        ofType(loginSuccessAction),
        tap(() => {
          console.log('1');
          // Navigate to home page using router.
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
