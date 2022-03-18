import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../Models/user';
import { UserLogin } from '../Models/user-login';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
userData = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient , private _router: Router) { 
    
    localStorage.getItem('token')!= null?this.setUserData():null;
  }

  register(userData:User):Observable<any>
  {
   
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signup',userData);
  
  }

  Login(dataLogin: UserLogin):Observable<any>
  {
        
     return this.    _httpClient.post('https://route-egypt-api.herokuapp.com/signin' , dataLogin);
  }

  setUserData():void {
     this.userData.next(jwtDecode(JSON.stringify(localStorage.getItem('token'))));
      
  }

  Logout(): void{
    localStorage.removeItem('token');
    this.userData.next(null);
    this._router.navigate(['login']);
  }
}
