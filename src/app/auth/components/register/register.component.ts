import { validationErrorsSelector } from './../../store/selectors';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/auth/store/actions/register.action';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup; // Declare form variable of type FormGroup
  isSubmitting$: Observable<boolean>; // Declare isSubmitting$ variable of type Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>; // Declare backendErrors$ variable of type Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm(); // Call initializeForm function to set up form
    this.initializeValues(); // Call initializeValues function to set up isSubmitting$ and backendErrors$ Observables
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector)); // Set isSubmitting$ Observable to result of isSubmittingSelector function from store
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector)); // Set backendErrors$ Observable to result of validationErrorsSelector function from store
  }

  initializeForm(): void {
    console.log('initializeForm');
    this.form = this.fb.group({
      // Create FormGroup using FormBuilder
      username: ['', Validators.required], // Add username FormControl with required validator
      email: ['', Validators.required], // Add email FormControl with required validator
      password: ['', Validators.required], // Add password FormControl with required validator
    });
  }

  onSubmit(): void {
    console.log('Submit', this.form.value, this.form.valid); // Log form value and validity to console
    const request: RegisterRequestInterface = {
      user: this.form.value, // Set user property of request object to form value
    };
    this.store.dispatch(registerAction({ request })); // Dispatch registerAction with request object as payload
  }
}
