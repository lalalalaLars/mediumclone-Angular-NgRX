import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';
import { reducers } from 'src/app/shared/modules/feed/store/reducers';
import { GetFeedEffect } from 'src/app/shared/modules/feed/effects/getFeed.effect';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed.component';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
