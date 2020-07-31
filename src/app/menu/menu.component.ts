import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links: Array<string> = [
    "Главное",
    "Россия",
    "Мир",
    "Бывший СССР",
    "Экономика",
    "Силовые структуры",
    "Наука и техника",
    "Культура",
    "Спорт",
    "Интернет и СМИ",
    "Ценности",
    "Путешествия",
    "Из жизни",
    "Дом"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
