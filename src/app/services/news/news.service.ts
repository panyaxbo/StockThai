import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class NewsService {

  constructor(private http: Http) { }
  LoadNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
}
