import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'muse-repair';

  ngOnInit() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAqGLSZqtNSd-7fuUBd-h1zLzwr3_Vacmg",
      authDomain: "pe-muse-repair.firebaseapp.com",
      databaseURL: "https://pe-muse-repair.firebaseio.com",
      projectId: "pe-muse-repair",
      storageBucket: "pe-muse-repair.appspot.com",
      messagingSenderId: "538872597415",
      appId: "1:538872597415:web:158021bcaa1ab1105e4482",
      measurementId: "G-DJET9SXDKV"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }


  shouldShowModal = false;

  showOrderModal() {
    this.shouldShowModal = true;
    console.log('bitch');
  }
  hideOrderModal() {
    this.shouldShowModal = false;
  }
}
