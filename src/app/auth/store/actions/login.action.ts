import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';
import { ActionTypes } from 'src/app/auth/store/actionTypes';

import { createAction, props } from '@ngrx/store';

// Action to perform login
export const loginAction = createAction(
  ActionTypes.LOGIN, // Type of action
  props<{ request: LoginRequestInterface }>() // Payload containing request of type LoginRequestInterface
);

// Action dispatched when login is successful
export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS, // Type of action
  props<{ currentUser: CurrentUserInterface }>() // Payload containing currentUser of type CurrentUserInterface
);

// Action dispatched when login fails
export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE, // Type of action
  props<{ errors: BackendErrorsInterface }>() // Payload containing errors of type BackendErrorsInterface
);
