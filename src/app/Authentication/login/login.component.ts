import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  resultMessage: string ='';
  alert_class:string = '';
 

  constructor(private _AuthService: AuthService, private _router: Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        email: new FormControl(null , [Validators.required , Validators.email]),
        password: new FormControl(null , [Validators.required ])
      }
    );
  }

  Login(loginData: FormGroup)
  {
    this._AuthService.Login(loginData.value).subscribe(
      (next)=> {
        console.log(next)
        this.alert_class = (this.resultMessage = next.message) == 'success'?'alert-success':'alert-danger';
        localStorage.setItem('token' , JSON.stringify(next.token));

        this._AuthService.setUserData();

        this._router.navigate(['home']);
      },
      (errors)=> {console.log(errors)}
    );
  }

  validation(propNam: string , condName: string ,form:FormGroup):boolean
  {
    return form.get(propNam)?.errors?.[condName] && form.get(propNam)?.touched ;
  }
}
