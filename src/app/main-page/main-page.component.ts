import { Component, OnInit } from '@angular/core';
import { newsArticle } from "../types";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  mostInportantNewsTitle: string = "главные новости";
  mostImportantNewsList: Array<newsArticle>;
  constructor() { }

  ngOnInit(): void {
    fetch("assets/data.json")
      .then((data: Response) => data.json())
      .then((response: Array<newsArticle>) => {
        this.mostImportantNewsList = response;
      });
  }

}
