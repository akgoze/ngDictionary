import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WordItemComponent } from './components/word-item/word-item.component';
import { WordsComponent } from './components/words/words.component';
import { WordDetailComponent } from './components/word-detail/word-detail.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { AllWordsComponent } from './components/all-words/all-words.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { WordService } from './services/word.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { environment } from './../environments/environment';

import { FlashMessagesModule } from 'angular2-flash-messages';

  import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
   } from '@angular/material';

   const appRoutes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'signup', component: RegisterComponent },
     { path: 'profile', component: ProfileComponent },
     { path: 'word-detail', component: WordDetailComponent },
     { path: 'add-word', component: AddWordComponent },
     { path: 'all-words', component: AllWordsComponent }
   ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    WordItemComponent,
    WordsComponent,
    AllWordsComponent,
    WordDetailComponent,
    AddWordComponent,
    HomeComponent,
    AllWordsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserAnimationsModule
  ],
  providers: [WordService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
