import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors';
import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/feed.action';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<GetFeedResponseInterface | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
