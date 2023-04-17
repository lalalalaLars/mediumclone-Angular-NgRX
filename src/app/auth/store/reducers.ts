// This file contains the implementation of the authentication feature's reducer, which handles the state updates based on the dispatched actions.

import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  getCurrentUserFailureAction,
} from 'src/app/auth/store/actions/getCurrentUser.action';
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from 'src/app/auth/store/actions/login.action';
import {
  registerSuccessAction,
  registerFailureAction,
  registerAction,
} from 'src/app/auth/store/actions/register.action';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';

import { Action, createReducer, on } from '@ngrx/store';

// The initial state of the authentication feature is defined here.
const initialState: AuthStateInterface = {
  isSubmitting: false, // indicates whether the user is currently submitting a form
  isLoading: false, // indicates whether the app is currently fetching the current user's details
  currentUser: null, // contains the details of the currently logged-in user
  validaionErrors: null, // contains any validation errors that occur during the authentication process
  isLoggedIn: null, // indicates whether the user is currently logged in or not
};

// The authReducer is created using the createReducer function provided by @ngrx/store.
// This function takes an initial state and a set of reducer functions, each of which handles a specific action type.
const authReducer = createReducer(
  initialState,

  // Register actions
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

  // Login actions
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
  ),

  // Get current user actions
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
);

// This function is used to combine all the reducers used by the application.
export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
