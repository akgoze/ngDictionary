import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uid: string;
  constructor(
    private afAuth: AngularFireAuth,
  ) { }
  getAuth() {
    return this.afAuth.authState.pipe(
      map(auth => auth)
    );
  }
  login(email, password) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        userData => resolve(userData),
        error => reject(error)
      );
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
