import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { GetArticleResponseInterface } from 'src/app/shared/types/getArticleResponse.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  // A method to get an article by its slug
  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles${slug}`; // Create the full API URL with the provided slug
    return this.http.get(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article; // Use the HttpClient to send a GET request to the API and return the response as an Observable
      })
    );
  }
}
