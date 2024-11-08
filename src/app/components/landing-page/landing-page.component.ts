import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      if (email === 'teste@teste.com' && password === 'teste123') {
        
        localStorage.setItem('user', JSON.stringify({ email }));
       
        this.router.navigate(['/species']);
      } else {
        this.loginError = 'Email ou senha inválidos. Por favor, tente novamente.';
      }
    } else {
      this.loginError = 'Preencha todos os campos corretamente.';
    }
    }
  }

