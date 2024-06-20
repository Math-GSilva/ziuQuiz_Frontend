import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    this.storeToken(token);
  }

  getToken(): string | null {
    return this.token || this.retrieveToken();
  }

  storeToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }
  
  retrieveToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}
