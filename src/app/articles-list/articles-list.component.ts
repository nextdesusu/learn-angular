import { Component, OnInit, Input } from '@angular/core';
import { newsArticle } from "../types";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  @Input() articlesList: Array<newsArticle>;
  constructor() { }

  ngOnInit(): void {
  }

}
