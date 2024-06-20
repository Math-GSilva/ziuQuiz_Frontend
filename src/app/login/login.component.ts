import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  async onSubmit() {
    console.log("Entrou nessa buceta");
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      await this.http.post('https://localhost:7295/Usuario/Login', loginData)
        .subscribe((response: any) => {
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/homepage']);
        }, error => {
          console.error('Login failed', error);
        });
    }
  }
}
