import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {tap} from "rxjs";
import {LoginResponse} from "../types/LoginResponse.type";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 apiUrl: string = "http://localhost:8080/auth";
  constructor(private httpClient: HttpClient) {
  }

  public login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl+ "/login", {email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }
  public signup(name: string, password: string, email: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl+ "/register", {name, password, email}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )

  }}
