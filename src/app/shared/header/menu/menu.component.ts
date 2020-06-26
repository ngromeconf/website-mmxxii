import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngrome-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter();

  menuList$: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.menuList$ = afs
      .collection('configuration2020', (ref) => {
        let query:
          | firebase.firestore.CollectionReference
          | firebase.firestore.Query = ref;
        query = query.where('active', '==', true);
        // query = query.orderBy('startTime', 'asc');
        return query;
      })
      .valueChanges();
  }

  ngOnInit(): void {}

  toggleSidebarStatus($event) {
    this.toggleSidebar.emit($event);
  }
}
