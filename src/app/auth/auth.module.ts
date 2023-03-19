import { RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
