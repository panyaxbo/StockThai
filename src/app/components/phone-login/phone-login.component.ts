import { PhoneNumber } from './../../classes/phone-number';
import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../services/window/window.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  User: any;
  constructor(private _windowService: WindowService) { }

  ngOnInit() {
    this.windowRef = this._windowService.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    this.windowRef.recapchaVerifier.render();
    console.log('init ', this.windowRef.recapchaVerifier.render());
  }

  SendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
    .then(result => {
      console.log(num);
      console.log(appVerifier);
      this.windowRef.confirmationResult = result;
    }).catch(error => {
      console.log(error, 'Incorrect code entered');
    });
  }

  VerifyLogin() {
    this.windowRef.confirmationResult.confirm(this.verificationCode)
    .then(result => {
      console.log(' result' , result);
      this.User = result.user;
    })
    .catch(error => {
      console.log(error, 'Incorrect code entered');
    });
  }

}
