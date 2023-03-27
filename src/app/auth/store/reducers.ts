import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from 'src/app/auth/store/actions/login.action';
import {
  registerSuccessAction,
  registerFailureAction,
} from 'src/app/auth/store/actions/register.action';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { registerAction } from 'src/app/auth/store/actions/register.action';

import { Action, createReducer, on } from '@ngrx/store';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  validaionErrors: null,
  isLoggedIn: null,
};

const authReducer = createReducer(
  initialState,
  // Register
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
  ),

  // Login
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validaionErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    loginFailureAction,
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
