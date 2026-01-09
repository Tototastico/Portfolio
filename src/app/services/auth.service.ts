import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.loggedIn.asObservable();

    constructor(private router: Router) {
        const stored = localStorage.getItem('isLoggedIn');
        if (stored === 'true') {
            this.loggedIn.next(true);
        }
    }

    login(password: string): boolean {
        // Hardcoded password for demo purposes as requested ("panel admin con contraseña")
        if (password === 'admin123') {
            this.loggedIn.next(true);
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigate(['/admin']);
            return true;
        }
        return false;
    }

    logout() {
        this.loggedIn.next(false);
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        return this.loggedIn.value;
    }
}
