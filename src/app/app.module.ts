import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WordItemComponent } from './components/word-item/word-item.component';
import { WordsComponent } from './components/words/words.component';
import { WordDetailComponent } from './components/word-detail/word-detail.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule
   } from '@angular/material';
import { HomeComponent } from './components/home/home.component';

   const appRoutes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'profile', component: ProfileComponent },
     { path: 'word-detail', component: WordDetailComponent},
     { path: 'add-word', component: AddWordComponent}
   ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    WordItemComponent,
    WordsComponent,
    WordDetailComponent,
    AddWordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
