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
  word: Word = {
    id: '',
    word_tr: '',
    word_en: '',
    word_sentece: ''
  };

  showEditWord: boolean = false;

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.wordService.getWords().subscribe(response => {
      return this.words = response;
    });
  }

  updateCurrentWord({value, valid}: {value: Word, valid: boolean}) {
    if (valid) {
      this.wordService.updateWord(value);
    }
  }

  editFunc(word) {
    console.log(word);
  }

}
