import { Component, inject } from '@angular/core';
import {RouterLink} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService = inject(AuthService)


  onLogin(email: string, password: string) {

    if (!email) {
      alert("Email is required")
      return;
    }

    if (!password) {
      alert("Password is required")
      return;
    }

    this.authService.onLogin({email, password});
  }

}
