import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
interface LoginForm {
  email: FormControl,
  password: FormControl;
}
@Component({
  selector: 'app-login-default-layout',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  providers: [LoginService],
  templateUrl: './login-default-layout.component.html',
  styleUrl: './login-default-layout.component.scss'
})
export class LoginDefaultLayoutComponent {
  userForm: FormGroup<LoginForm>;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]],
    });
  }
  public navigate() {
    this.router.navigate(['registrar']);
  }
  onSubmit() {
    this.loginService.login(this.userForm.value.email, this.userForm.value.password).subscribe(
      { next: () => console.log('sucesso'),
        error: () => { console.log('error', error); }
      }
    )
  }
}
