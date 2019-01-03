import { Component, OnInit } from '@angular/core';
import { WordService } from './../../services/word.service';
import { Word } from './../../models/Word';

@Component({
  selector: 'app-word-item',
  templateUrl: './word-item.component.html',
  styleUrls: ['./word-item.component.css']
})
export class WordItemComponent implements OnInit {
  words: Word[];

  constructor(private wordService: WordService) {
  }

  ngOnInit() {
    this.autoRenew();
  }

  autoRenew() {
    this.wordService.getWords().subscribe(response => {
      const arrLength = response.length;
      const randNumber = Math.floor(Math.random() * (0 - arrLength) + arrLength);

      return this.words = Array(response[randNumber]);
    });
  }
}
