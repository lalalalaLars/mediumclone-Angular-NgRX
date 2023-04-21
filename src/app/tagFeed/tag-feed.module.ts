import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TagFeedComponent } from 'src/app/tagFeed/components/tag-feed/tag-feed.component';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feedToggler/feed-toggler.module';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    FeedModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
})
export class TagFeedModule {}
