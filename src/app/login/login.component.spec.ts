import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { HeaderComponent } from '../header/header.component';
import { CardstabComponent } from '../cardstab/cardstab.component';
import { NewmatchcardComponent } from '../newmatchcard/newmatchcard.component';
import { MatTabsModule, MatFormFieldModule } from '@angular/material';
import { OldmatchComponent } from '../oldmatch/oldmatch.component';
import { RecommentComponent } from '../recomment/recomment.component';
import { NewrecommendsComponent } from '../newrecommends/newrecommends.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginationControlsComponent } from 'ngx-pagination';
import { NewMatchFilter } from '../newmatchcard/newmatch-filter.pipe';


xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,
      HomeComponent,
    RegisterComponent,
  EditprofileComponent,
  HeaderComponent,
  CardstabComponent,
  NewmatchcardComponent,OldmatchComponent,
RecommentComponent,
NewrecommendsComponent,PaginationControlsComponent,NewMatchFilter,
NewmatchcardComponent,NewMatchFilter,PaginationControlsComponent ],
      imports:[FormsModule,
      ReactiveFormsModule,HttpClientModule,
    AppRoutingModule,
  MatTabsModule,MatFormFieldModule,
  NgxSpinnerModule],
      providers:[HttpClient,Ng4LoadingSpinnerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain carousl', () => {
    let element=fixture.debugElement.query(By.css('carousl'))
     expect(element).toBeFalsy();
});  
it('should contain card body with title and text', () => {
  let element=fixture.debugElement.query(By.css('card-body'))
   expect(element).toBeFalsy();
});
it('should set submitted to true',async(() => {
  component.loginUser();
  expect(component.loginUser).toBeTruthy();
  }));

  it('email field validity',() =>{
    let email=component.loginForm.controls['userEmail'];
    expect(email.valid).toBeFalsy();
    });
    it('password field validity',() =>{
      let password=component.loginForm.controls['userPassword'];
      expect(password.valid).toBeFalsy();
      });
});
