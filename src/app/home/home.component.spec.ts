import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { CardstabComponent } from '../cardstab/cardstab.component';
import { NewmatchcardComponent } from '../newmatchcard/newmatchcard.component';
import { MaterialModule } from '../material.module';
import { OldmatchComponent } from '../oldmatch/oldmatch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewMatchFilter } from '../newmatchcard/newmatch-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { RecommentComponent } from '../recomment/recomment.component';
import { NewrecommendsComponent } from '../newrecommends/newrecommends.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,
        HeaderComponent,
        CardstabComponent,
      NewmatchcardComponent,
    OldmatchComponent,
    NewMatchFilter,RecommentComponent,
  NewrecommendsComponent,
LoginComponent,RegisterComponent,
EditprofileComponent],
      imports:[MaterialModule,
      FormsModule,
      ReactiveFormsModule,
    Ng4LoadingSpinnerModule,
    NgxPaginationModule,
  HttpClientModule,
BrowserAnimationsModule,
BrowserModule,
AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain div tag', () => {
    let element=fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('should contain section tag', () => {
    let element=fixture.debugElement.query(By.css('section'));
    expect(element).toBeTruthy();
  });
  it('should contain anchor tag', () => {
    let element=fixture.debugElement.query(By.css('a'));
    expect(element).toBeTruthy();
  });
  it('should contain image tag', () => {
    let element=fixture.debugElement.query(By.css('img'));
    expect(element).toBeTruthy();
  });
  it('should contain span tag', () => {
    let element=fixture.debugElement.query(By.css('span'));
    expect(element).toBeTruthy();
  });
  
  
  it('should contain orderList tag', () => {
    let element=fixture.debugElement.query(By.css('ol'));
    expect(element).toBeTruthy();
  });
  it('should contain list tag', () => {
    let element=fixture.debugElement.query(By.css('li'));
    expect(element).toBeTruthy();
  });
  it('should contain a header', () => {
    let element=fixture.debugElement.query(By.css('app-header'));
   expect(element).toBeTruthy();
  });
  it('should contain a cardstab', () => {
    let element=fixture.debugElement.query(By.css('app-cardstab'));
   expect(element).toBeTruthy();
  });
  it('should contain card body with title and text', () => {
    let element=fixture.debugElement.query(By.css('card-body'))
     expect(element).toBeFalsy();
  });

  it('should contain card title', () => {
      let element=fixture.debugElement.query(By.css('card-title'))
       expect(element).toBeFalsy();
    });

  it('should contain card body with text', () => {
        let element=fixture.debugElement.query(By.css('card-text'))
         expect(element).toBeFalsy();
        });
  it('should contain primary button', () => {
          let element=fixture.debugElement.query(By.css('btn btn-primary btn-lg'))
           expect(element).toBeFalsy();
          });    
          //carousl
 it('should contain carousl', () => {
            let element=fixture.debugElement.query(By.css('carousl'))
             expect(element).toBeFalsy();
   });  
   it('should contain carousl with slides', () => {
    let element=fixture.debugElement.query(By.css('carousel slide'))
     expect(element).toBeFalsy();
    });  
    //carousel-item
    it('should contain carousl item', () => {
      let element=fixture.debugElement.query(By.css('carousel-item'))
       expect(element).toBeFalsy();
      });   
    //carousel-control-next-icon
    it('should contain carousl with icon', () => {
      let element=fixture.debugElement.query(By.css('carousel-control-next-icon'))
       expect(element).toBeFalsy();
      });  
  
});
