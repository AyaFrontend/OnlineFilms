import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogin:boolean = false;

  constructor(private _auth: AuthService) { 
   
  }

  ngOnInit(): void {
    this._auth.userData.subscribe(()=>
    {
      this.isLogin = this._auth.userData.getValue()!=null;
    });
    
  }
  Logout()
  {
    this._auth.Logout();
  }

}
