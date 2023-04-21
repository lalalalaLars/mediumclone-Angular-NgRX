import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';
import { createAction, props } from '@ngrx/store';

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { ActionTypes } from 'src/app/auth/store/actionTypes';

// Action to trigger user registration process
export const registerAction = createAction(
  ActionTypes.REGISTER, // Action type for registration
  props<{ request: RegisterRequestInterface }>() // Payload containing user registration data
);

// Action to dispatch upon successful user registration
export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS, // Action type for successful registration
  props<{ currentUser: CurrentUserInterface }>() // Payload containing the current user information
);

// Action to dispatch upon user registration failure
export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE, // Action type for registration failure
  props<{ errors: BackendErrorsInterface }>() // Payload containing the backend errors encountered during registration
);
