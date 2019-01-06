import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Word } from '../models/Word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  wordCollection: AngularFirestoreCollection<Word>;
  wordDoc: AngularFirestoreDocument<Word>;
  words: Observable<Word[]>;
  word: Observable<Word>;

  constructor(private afs: AngularFirestore) {
    this.wordCollection = afs.collection('words');
  }


  getWords(): Observable<Word[]> {
    this.words = this.wordCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Word;
        data.id = a.payload.doc.id;
        return data;
      }))
    );

    return this.words;
  }


  newWord(word: Word) {
    this.wordCollection.add(word);
  }

  getSingleWord(wordId) {
    this.afs.collection('words').doc(wordId).valueChanges();
  }

  updateWord(word: Word) {
    this.wordCollection.doc(word.id).update(word);
  }
  deleteWord(wordId) {
    this.wordCollection.doc(wordId).delete();
  }
}
