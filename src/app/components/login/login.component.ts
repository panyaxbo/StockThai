import { MessagingService } from './../../services/messaging/messaging.service';
import { User } from './../../classes/user';
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email: string;
  Password: string;
  User: User;

  message;
  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              public _userService: UserService,
              private _messagingService: MessagingService) { }

  ngOnInit() {
    this._messagingService.getPermission();
    this._messagingService.receiveMessage();
    this.message = this._messagingService.currentMessage;
  }
  LoginWithEmailAndPassword() {
    console.log('b4 auth ', this.afAuth.authState);
    this.afAuth.auth.signInWithEmailAndPassword(this.Email, this.Password)
    .then(data => {
      console.log('a4 auth ', this.afAuth.authState);
      this.User = data;
      this._userService.SetCurrentUserData(this.User);
      this.router.navigateByUrl('/main');
    })
    .catch((error: firebase.FirebaseError)  => {
      console.log(error);
      if (error.code === 'auth/invalid-email') {

      } else if (error.code === 'auth/user-not-found') {

      }
      this.Email = '';
      this.Password = '';
    });
  }
  LoginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
    .then((authData) => {
      console.log('log gg ', authData);
      this.User = authData.user;
      this._userService.SetCurrentUserData(this.User);
      this.router.navigateByUrl('/main');
    }).catch((error) => {
      console.log('log gg ', error);
    });
  }
  LoginWithFacebook() {
  }
  LoginWithTwitter() {
  }
  LoginWithPhoneNumber() {
    this.router.navigateByUrl('/phone-login');
  }
  GotoSignup() {
    this.router.navigateByUrl('/signup');
  }
  GotoForgetPassword() {
    this.router.navigateByUrl('/forget-password');
  }
}
