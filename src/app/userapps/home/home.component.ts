import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objs:any[] = [
    { id: 9, title: "ABC", count: 40 },
    { id: 5, title: "GHI", count: 24 },
    { id: 17, title: "aaa", count: 75 },
    { id: 2, title: "zzz", count: 1},
    { id: 3, title: "DEF", count: 16 },
    { id: 7, title: "JKL", count: 32 },
    { id: 1, title: "ZYX", count: 8 }
  ];
  searchtext: string = "";
  aBool: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
