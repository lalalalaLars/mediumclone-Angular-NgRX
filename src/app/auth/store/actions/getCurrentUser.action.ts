import { createAction, props } from '@ngrx/store';

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { ActionTypes } from 'src/app/auth/store/actionTypes';

// Action to get current user
export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

// Action dispatched when getting current user is successful
export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS, // Type of action
  props<{ currentUser: CurrentUserInterface }>() // Payload containing currentUser of type CurrentUserInterface
);

// Action dispatched when getting current user fails
export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE // Type of action
);
