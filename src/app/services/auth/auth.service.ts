import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.baseURL + 'auth';
  
  constructor(
    private http: HttpClient,
      private router: Router
  ) { }

  login(user : any) {
    return this.http.post(this.authUrl + '/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  register(data : any) {
    return this.http.post(this.authUrl + '/register', data);
  }

  registerCometChat(data : any) {
    return this.http.post('https://api-us.cometchat.io/v2.0/users', data, {headers: {appId: '33172a66e955908', apiKey: '5dbdcbadee585287a125ccd4af89740d0240178e' }});
  }
}
