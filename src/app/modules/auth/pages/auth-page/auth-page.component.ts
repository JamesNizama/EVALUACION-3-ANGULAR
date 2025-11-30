import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  errorSesion: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    console.log('AuthPageComponent loaded');
  }

  user = {
    username: '',
    password: '',
  };

  formDatos = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get username() {
    return this.formDatos.get('username');
  }

  get password() {
    return this.formDatos.get('password');
  }

  sendLogin() {
    if (this.formDatos.valid) {
      this.authService
        .sendCredentials(
          this.formDatos.value?.username ?? '',
          this.formDatos.value?.password ?? ''
        )
        .subscribe({
          next: (response) => {
            console.log('Login successful', response);
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Login failed', error);
          },
        });
    } else {
      console.log('Form is invalid');
    }
  }

  createUser() {
    
  }
}
