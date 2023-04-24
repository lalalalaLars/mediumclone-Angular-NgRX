import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleComponent } from 'src/app/article/components/article/article.component';
import { ArticleService } from 'src/app/shared/services/article.service';
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect';
import { reducers } from 'src/app/article/store/reducers';
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { TaglistModule } from '../shared/modules/tagList/taglist.module';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    ErrorMessageModule,
    LoadingModule,
    TaglistModule,
  ],
  providers: [ArticleService],
})
export class ArticleModule {}
