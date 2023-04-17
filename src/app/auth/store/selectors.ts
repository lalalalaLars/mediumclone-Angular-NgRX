import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';

// createFeatureSelector is a factory function that returns a selector for selecting the
// feature state from the root state. Here, the feature state is of type AuthStateInterface.
export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

// isSubmittingSelector is a selector that retrieves the isSubmitting property from the feature state.
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

// validationErrorsSelector is a selector that retrieves the validationErrors property from the feature state.
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validaionErrors
);

// isLoggedInSelector is a selector that retrieves the isLoggedIn property from the feature state.
export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

// isAnonymousSelector is a selector that returns a boolean indicating whether the user is anonymous or not.
export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
);

// currentUserSelector is a selector that retrieves the currentUser property from the feature state.
export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
);
