import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: 'login',     component: AppComponent },
  { path: 'registrar',    component: AppComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
