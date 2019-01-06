import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('DONE ' + res);
    }).catch(err => {
      console.log('HATA' + err);
    });
  }
}
