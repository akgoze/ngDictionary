import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operator/map";

@Component({
  selector: 'app-word-item',
  templateUrl: './word-item.component.html',
  styleUrls: ['./word-item.component.css']
})
export class WordItemComponent implements OnInit {
  items: Observable<any>;
  constructor(private afs:AngularFirestore) { 
    this.items = afs.collection('words',ref=> ref.orderBy("word_en")).valueChanges();
  }

  ngOnInit() {
  }

}
