import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  headerDate: string = "12.06.2020";
  constructor() { }

  ngOnInit(): void {
  }

}
