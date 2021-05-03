import { Component, Input, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-view-my-life',
  templateUrl:'./view-my-life.component.html',
  styles: [
  ]
})
export class ViewMyLifeComponent implements OnInit {

  path: string = "portfolioItems"
  items: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.items = this.db.collection(this.path).valueChanges();
  }

}
