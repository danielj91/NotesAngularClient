import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private readonly ACCESS_TOKEN = 'accessToken';

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  get accessToken() {
    return localStorage.getItem(this.ACCESS_TOKEN) || '';
  }

  constructor(private httpClient: HttpClient) {
    const accessToken = localStorage.getItem(this.ACCESS_TOKEN);
    this._isLoggedIn.next(!!accessToken);
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          localStorage.setItem(this.ACCESS_TOKEN, response.accessToken);
          this._isLoggedIn.next(true);
        })
      );
  }

  logout() {}
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
