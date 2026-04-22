import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]],
    });
  }
  onSubmit() {
    console.log("olá"+ this.userForm.value);
    if (this.userForm.valid) {
      console.warn(this.userForm.value);
      console.log("eu funciono!");

    }
  }
}
