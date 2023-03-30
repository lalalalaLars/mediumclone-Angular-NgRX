import { ProfileInterface } from 'src/app/shared/types/profile.interface';
export interface ArticleInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  taglist: string[];
  description: string;
  author: ProfileInterface;
  favorited: boolean;
  favoritesCount: number;
}
