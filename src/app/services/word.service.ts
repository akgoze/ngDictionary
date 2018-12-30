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
        return data;
      }))
    );

    return this.words;
  }

}
