import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pageTitle = 'Pronix Product Management';

  constructor(public authService: AuthService, private router: Router) {

  }

  userLogOut(): void {
    this.authService.logout();
    this.router.navigate(['/logout']);
  }
}
