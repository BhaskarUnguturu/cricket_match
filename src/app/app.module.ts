import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NewmatchcardComponent } from './newmatchcard/newmatchcard.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { CardstabComponent } from './cardstab/cardstab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewMatchFilter } from './newmatchcard/newmatch-filter.pipe';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { OldmatchComponent } from './oldmatch/oldmatch.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { RecommentComponent } from './recomment/recomment.component';
import { NewrecommendsComponent } from './newrecommends/newrecommends.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { EditprofileComponent } from './editprofile/editprofile.component';




const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: HomeComponent
  }
  
];
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NewmatchcardComponent,
    CardstabComponent,
    NewMatchFilter,
    OldmatchComponent,
    LoginComponent,
    RegisterComponent,
    RecommentComponent,
    NewrecommendsComponent,
    EditprofileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgxPaginationModule,
    BrowserModule,
    ShowHidePasswordModule,
    ToastrModule.forRoot()
   
   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule  {
  

 }
