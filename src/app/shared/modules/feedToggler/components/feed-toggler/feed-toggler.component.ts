import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string;

  isLoggedIn$: Observable<boolean>; // Observable that holds a boolean value indicating if the user is logged in

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializedValues(); // Method call to initialize the isLoggedIn$ observable
  }

  initializedValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector)); // Assigns the isLoggedIn$ observable with the value obtained from the isLoggedInSelector
  }
}
