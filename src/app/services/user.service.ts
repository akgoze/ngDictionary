import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  users: Observable<User[]>;
  constructor(
    private afs: AngularFirestore
  ) { }


  getUsers(): Observable<User[]> {
    this.users = this.afs.collection('users').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
    return this.users;
  }

  getUserInfo(userid): Observable<User> {
    this.user = this.afs.collection('users').doc(userid).valueChanges();
    return this.user;
  }
}
