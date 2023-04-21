import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedTogglerComponent } from 'src/app/shared/modules/feedToggler/components/feed-toggler/feed-toggler.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [FeedTogglerComponent],
  imports: [CommonModule, RouterLink],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
