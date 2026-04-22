import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-default-layout',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-default-layout.component.html',
  styleUrl: './login-default-layout.component.scss'
})
export class LoginDefaultLayoutComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.warn(this.userForm.value);
      console.log("eu funciono!");
    }
  }
}
