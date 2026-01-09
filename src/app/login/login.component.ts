import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    password = '';
    error = '';

    constructor(private authService: AuthService) { }

    login() {
        if (!this.authService.login(this.password)) {
            this.error = 'Invalid password';
        }
    }
}
