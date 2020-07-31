import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  errorText: string = "ошибка 404 страницы не существует";
  constructor() { }

  ngOnInit(): void {
  }

}
