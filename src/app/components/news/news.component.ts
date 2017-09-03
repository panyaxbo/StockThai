import { NewsService } from './../../services/news/news.service';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: any;
  constructor(public _newsService: NewsService) { }

  ngOnInit() {

  this._newsService.LoadNewsData().subscribe(data => {
    console.log(data);
    this.articles = data.articles;
  });

  }

}
