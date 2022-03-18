import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { DetailsComponent } from './Home/details/details.component';
import { HomeComponent } from './Home/home/home.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'details/:query/:id', component:DetailsComponent,canActivate:[AuthGuard]},
  {path:'**',redirectTo:'register',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
