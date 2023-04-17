import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/getCurrentUser.action';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GetCurrentUserEffect {
  // Effect to retrieve the current user information
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction), // Listen for getCurrentUserAction
      switchMap(() => {
        const token = this.persistanceService.get('accessToken'); // Retrieve the access token from the persistence service

        if (!token) {
          // If access token is not present, return failure action
          return of(getCurrentUserFailureAction());
        }

        // Use the auth service to get the current user information using the access token
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser }); // On success, return the current user information using the success action
          }),

          catchError(() => {
            return of(getCurrentUserFailureAction()); // On error, return the failure action
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
