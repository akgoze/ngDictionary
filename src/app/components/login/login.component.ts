import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.email, this.password).then(response => {
      this.flashMessage.show('Logged in successfully', {
        cssClass: 'alert-success'
      });
      this.router.navigate(['/']);
    }).catch(err => {
      this.flashMessage.show('Check your login information.', {
        cssClass: 'alert-danger'
      });
    });
  }

}
