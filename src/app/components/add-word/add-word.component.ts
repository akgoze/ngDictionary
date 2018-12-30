import { Component, OnInit } from '@angular/core';
import { WordService } from './../../services/word.service';
import { Word } from './../../models/Word';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {
  words: Word[];
  constructor(private wordService: WordService) { }

  ngOnInit() {
  }

}
