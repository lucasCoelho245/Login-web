import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]],
    });
  }
  onSubmit() {
    this.loginService.login(this.userForm.value.email, this.userForm.value.password).subscribe(
      { next: () => console.log('sucesso'),
        error: () => { console.log('error'); }
      }
    )
  }
}
