// This enum contains a list of ActionTypes that are related to the authentication feature of the application.
// Each action type represents a specific action that can be dispatched to the store.

export enum ActionTypes {
  // Action types related to the registration process
  REGISTER = '[Auth] Register', // Dispatched when a user initiates the registration process
  REGISTER_SUCCESS = '[Auth] Register success', // Dispatched when the registration process is successful
  REGISTER_FAILURE = '[Auth] Register failure', // Dispatched when the registration process fails

  // Action types related to the login process
  LOGIN = '[Auth] Login', // Dispatched when a user initiates the login process
  LOGIN_SUCCESS = '[Auth] Login success', // Dispatched when the login process is successful
  LOGIN_FAILURE = '[Auth] Login failure', // Dispatched when the login process fails

  // Action types related to fetching the current user
  GET_CURRENT_USER = '[Auth] Get current user', // Dispatched when the app requests the current user's details
  GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success', // Dispatched when the current user's details are successfully fetched
  GET_CURRENT_USER_FAILURE = '[Auth] Get current user failure', // Dispatched when there is an error fetching the current user's details
}
