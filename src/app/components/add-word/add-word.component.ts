import { Component, OnInit, ViewChild } from '@angular/core';
import { WordService } from './../../services/word.service';
import { Word } from './../../models/Word';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {
  createdDate: Date = new Date();
  word: Word = {
    word_en: '',
    word_tr: '',
    word_sentence: '',
    created_date: new Date()
  };
  @ViewChild('addWordForm') form: any;
  constructor(private wordService: WordService) { }

  ngOnInit() {
  }

  AddWord({value, valid}: {value: Word, valid: boolean}) {
    if (valid) {
      this.wordService.newWord(value);
    }
  }
}
