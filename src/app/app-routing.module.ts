import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecommentComponent } from './recomment/recomment.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AuthserviceService } from './authservice.service';
import { CardstabComponent } from './cardstab/cardstab.component';

const routes: Routes = [
  {
    path: 'dashboard', component: HomeComponent
  },
  { path: 'login', component: LoginComponent   },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path:'editProfile',component:EditprofileComponent
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
