import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imdb-title',
  templateUrl: './imdb-title.component.html',
  styleUrls: ['./imdb-title.component.css']
})
export class ImdbTitleComponent implements OnInit {

  toggleImdbTitle: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCard(cardId): void {
    if (cardId == 'artist') {
    }
    if (cardId == 'title') {
      this.toggleImdbTitle = !this.toggleImdbTitle;
    }
  }

}
