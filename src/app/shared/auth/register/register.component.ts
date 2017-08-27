import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { config } from '../../config';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
  }
  model = new User();
  registerUser() {
    this.authService.signup(this.model)
      .subscribe(result => {
        if (result === true) {
            this.router.navigate(['/']);
        } else {
            // this.error = 'Username or password is incorrect';
            // this.loading = false;
        }
      });
    // this.http.post(config.baseUrl+'api/register', this.model)
    //   .subscribe(
    //     response => {
    //       localStorage.setItem('currentUser', response.json().token);
    //       this.router.navigate(['']);
    //     },
    //     error => {
    //       alert(error.text());
    //       console.log(error.text());
    //     }
    //   );
  }
}
