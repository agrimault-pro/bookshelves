import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCzGYZAXGaXgImtPW3anNm272ff-6peyd4",
      authDomain: "bookshelves-b12f3.firebaseapp.com",
      databaseURL: "https://bookshelves-b12f3.firebaseio.com",
      projectId: "bookshelves-b12f3",
      storageBucket: "bookshelves-b12f3.appspot.com",
      messagingSenderId: "121635151703"
    };
    firebase.initializeApp(config);
  }
}
