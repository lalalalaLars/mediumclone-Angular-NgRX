import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { PopularTagsStateInterface } from 'src/app/shared/modules/popularTags/types/popularTagsState.interface';
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  article: ArticleStateInterface;
  popularTags: PopularTagsStateInterface;
}
