import { PersistanceService } from 'src/app/shared/services/persistance.service';
import {
  registerSuccessAction,
  registerFailureAction,
  registerAction,
} from 'src/app/auth/store/actions/register.action';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions, // NGRX Actions observable, all actions that are dispatched.
    private authService: AuthService, // instance of AuthService, used to make API requests.
    private persistanceService: PersistanceService, // instance of PersistanceService, used to store token.
    private router: Router // instance of Router, used to redirect user after successful registration.
  ) {}

  // register$ effect listens to registerAction dispatched by the RegisterComponent.
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          // It makes a request to AuthService.register with the payload from the action.
          map((currentUser: CurrentUserInterface) => {
            // It then maps the response to registerSuccessAction and stores the token in the PersistanceService.
            this.persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          // If there's an error, it maps the error response to registerFailureAction.
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  // redirectAfterSubmit$ effect listens to registerSuccessAction dispatched by the register$ effect.
  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/'); // If the action is successful, it redirects the user to the home page using Router.navigateByUrl.
        })
      ),
    { dispatch: false } // We set dispatch to false to indicate that we don't want to dispatch any new actions from this effect.
  );
}
