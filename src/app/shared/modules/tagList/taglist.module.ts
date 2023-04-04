import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaglistComponent } from 'src/app/shared/modules/tagList/components/taglist/taglist.component';

@NgModule({
  declarations: [TaglistComponent],
  imports: [CommonModule],
  exports: [TaglistComponent],
})
export class TaglistModule {}
