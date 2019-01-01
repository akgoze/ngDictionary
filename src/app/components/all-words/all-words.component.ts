import { Component, OnInit } from '@angular/core';
import { WordService } from './../../services/word.service';
import { Word } from './../../models/Word';

@Component({
  selector: 'app-all-words',
  templateUrl: './all-words.component.html',
  styleUrls: ['./all-words.component.css']
})
export class AllWordsComponent implements OnInit {
  words: Word[];
  editwords: Word = {
    word_tr: 'Türkçe',
    word_en: 'English',
    word_sentece: 'Yeni bir cümle'
  };

  showEditWord: boolean = true;
  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.wordService.getWords().subscribe(response => {
      return this.words = response;
    });
  }

}
