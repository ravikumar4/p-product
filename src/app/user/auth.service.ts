import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;
  redirectUrl: string;


  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor() { }

  login( userName: string, password: string): void {
    if (!userName || !password) {
      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName,
        isAdmin: true
      };
    } else {
    this.currentUser = {
      id: 2,
      userName,
      isAdmin: false
    };
  }
    console.log('login -> login successful');
  }

  logout(): void {
    this.currentUser = null;
  }
}
