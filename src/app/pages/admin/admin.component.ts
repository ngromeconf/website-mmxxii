import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() {
    console.log('admin page');
  }

  ngOnInit(): void {
  }

  // login() {
  //   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  // logout() {
  //   this.auth.signOut();
  // }

}
