import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ForgetPassword() {

  }
  BacktoLogin() {
    this.router.navigateByUrl('/login');
  }
}
