import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pageTitle = 'Log In';
  errorMessage: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      console.log('login invoke for user ->' + userName);
      this.authService.login(userName, password);
      if (this.authService.currentUser) {
        if (this.authService.redirectUrl) {
          this.router.navigateByUrl(this.authService.redirectUrl);
        } else {
          this.router.navigate(['/products']);
        }
      }
    } // else {
    //   this.errorMessage = 'Please enter a user name and password.';
    // }
  }
}
