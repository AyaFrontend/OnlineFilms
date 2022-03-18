import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  resultMessage: string ='';
  alert_class:string = '';
  constructor(private _authService: AuthService , private _router:Router) {

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      first_name: new FormControl(null , 
        [Validators.maxLength(8),Validators.minLength(3),
         Validators.required , Validators.pattern(/^[A-Z]/)]),

      last_name: new FormControl(null,
         [Validators.maxLength(8),Validators.minLength(3),
          Validators.required , Validators.pattern(/^[A-Z]/)]),

      email: new FormControl(null,[Validators.email , Validators.required]),
      password: new FormControl(null , [Validators.pattern(/[A-Za-b0-9]{6,}/) , Validators.required]),
      age: new FormControl(null , [Validators.required , Validators.min(15) , Validators.max(80)])
    });
  }

  register(form:FormGroup)
  {

    this._authService.register(form.value).subscribe( (next)=>
    { 
     
       this.alert_class = (this.resultMessage = next.message) == 'success'?'alert-success':'alert-danger';
       
       this._router.navigate(['login']);
      
    } ,   
    (errors)=>
    {

      this.alert_class = 'alert-danger';
      this.resultMessage = errors.message;
      
    });
    
  }

  validation(propNam: string , condName: string ,form:FormGroup):boolean
  {
    return form.get(propNam)?.errors?.[condName] && form.get(propNam)?.touched ;
  }
}
