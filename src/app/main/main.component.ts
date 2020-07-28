import { Component, OnInit } from '@angular/core';
import { newsArticle } from "../types";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  headerDate: string = "12.06.2020";
  mostInportantNewsTitle: string = "главные новости";
  mostImportantNewsList: Array<newsArticle> = [
    {
      name: "Дикие верблюды разгромили кладбище и три села под Астраханью",
      link: "#",
      date: "01.01.2020",
    },
    {
      name: "В России выдали первую лицензию на создание сети 5G",
      link: "#",
      date: "01.01.2020",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
