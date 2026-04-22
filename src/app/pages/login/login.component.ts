import {Component, inject, OnInit} from '@angular/core';
import {LoginDefaultLayoutComponent} from "../../components/login-default-layout/login-default-layout.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from "../../components/register/register.component";
import {NgIf} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginDefaultLayoutComponent,
    ReactiveFormsModule,
    RegisterComponent,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  protected currentUrl = this.router.url;

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.currentUrl = (e as NavigationEnd).url;
      });
  }
}
