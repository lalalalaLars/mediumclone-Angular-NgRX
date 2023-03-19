import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { ActionTypes } from 'src/app/auth/store/actionTypes';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
