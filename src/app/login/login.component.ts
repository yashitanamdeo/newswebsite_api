import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      localStorage.setItem('user_details', JSON.stringify(this.socialUser));
      console.log(this.socialUser);

      if (!this.isLoggedin) {
        this.router.navigate(['login']);
        return;
      } else {
        this.router.navigate(['home']);
      }
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // .then((data) => {
    //   localStorage.setItem('google_auth', JSON.stringify(data));
    // });
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
}
