import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imdb-all',
  templateUrl: './imdb-all.component.html',
  styleUrls: ['./imdb-all.component.css']
})
export class ImdbAllComponent implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
