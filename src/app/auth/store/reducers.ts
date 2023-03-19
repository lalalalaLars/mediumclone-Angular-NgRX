import { AuthStateInterface } from './../types/authState.interface';
import { registerAction } from 'src/app/auth/store/actions';
import { createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);
