import {
  registerSuccessAction,
  registerFailureAction,
} from './actions/register.actions';
import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { registerAction } from 'src/app/auth/store/actions/register.actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  validaionErrors: null,
  isLoggedIn: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validaionErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validaionErrors: action.errors,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
