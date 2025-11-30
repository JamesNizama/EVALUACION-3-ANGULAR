import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = enviroment.api;

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

sendCredentials(username: string, password: string) {
  const body = new URLSearchParams();
  body.set('username', username);
  body.set('password', password);

  return this.httpClient.post<string>(
    `${this.URL}/auth/login`,
    body.toString(),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      responseType: 'text' as 'json'  // <-- esto sigue igual
    }
  ).pipe(
    tap((token) => {
      this.cookieService.set('token', token, 1, '/');
    })
  );
}


}
