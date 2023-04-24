import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { GlobalFeedComponent } from 'src/app/globalFeed/components/global-feed/global-feed.component';
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feedToggler/feed-toggler.module';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
})
export class GlobalFeedModule {}
