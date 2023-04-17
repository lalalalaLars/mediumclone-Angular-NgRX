import { GetCurrentUserEffect } from 'src/app/auth/store/effects/getCurrentUser.effect';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.modules';
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { reducers } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

// Define the routes for the AuthModule
const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  // Declare the components used in the AuthModule
  declarations: [RegisterComponent, LoginComponent],

  // Declare the services used in the AuthModule
  providers: [AuthService, PersistanceService],

  // Import the required Angular and external modules
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
})
export class AuthModule {}
