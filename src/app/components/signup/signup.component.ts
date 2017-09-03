import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Email = '';
  Password = '';
  constructor(private router: Router,
    private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  ValidateEmailAndPassword() {

  }
  Signup() {
    this.ValidateEmailAndPassword();
    this.afAuth.auth.createUserWithEmailAndPassword(this.Email, this.Password)
    .then(result => {
      console.log('signup success ', result);
    })
    .catch((error: firebase.FirebaseError) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/argument-error') {

      }
    });
  }

  BacktoLogin() {
    this.router.navigateByUrl('/login');
  }
}
