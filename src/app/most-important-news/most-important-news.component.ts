import { Component, OnInit, Input } from '@angular/core';
import { newsArticle } from "../types";

@Component({
  selector: 'app-most-important-news',
  templateUrl: './most-important-news.component.html',
  styleUrls: ['./most-important-news.component.css']
})
export class MostImportantNewsComponent implements OnInit {
  @Input() title: string;
  @Input() newsList: Array<newsArticle>;
  constructor() { }

  ngOnInit(): void {
  }

}
