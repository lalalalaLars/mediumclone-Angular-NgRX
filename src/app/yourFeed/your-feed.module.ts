import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourFeedComponent } from 'src/app/yourFeed/components/your-feed/your-feed.component';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feedToggler/feed-toggler.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    FeedModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
})
export class YourFeedModule {}
