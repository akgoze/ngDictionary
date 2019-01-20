import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginStatus: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private flashService: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.loginStatus = true;
      } else {
        this.loginStatus = false;
        this.router.navigate(['/login']);
      }
    });
  }

  signOut() {
    this.authService.logout();
    this.flashService.show('Logout successfully', {
      cssClass: 'alert-success'
    });
  }
}
