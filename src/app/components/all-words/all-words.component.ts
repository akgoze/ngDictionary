import { Component, OnInit } from '@angular/core';
import { WordService } from './../../services/word.service';
import { Word } from './../../models/Word';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
    word_sentence: ''
  };
  createdDate: Date = new Date();
  wordIds: string;
  confirmModal: boolean;

  showEditWord: boolean = false;

  constructor(
    private wordService: WordService,
    private afs: AngularFirestore) {
     }

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
  deleteWordItem(wordId) {
    const confirmModal = confirm('Are you sure?');
    console.log(confirmModal);
    if (confirmModal) {
      this.wordService.deleteWord(wordId);
    }
  }

  editWordItem(wordId) {
    this.showEditWord = !this.showEditWord;
    this.afs.collection('words').doc(wordId).valueChanges().subscribe(response => {
      return this.word = response;
    });
    this.wordIds = wordId;
    this.createdDate = new Date();
  }

}
