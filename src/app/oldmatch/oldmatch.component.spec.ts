import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldmatchComponent } from './oldmatch.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule, MatTabsModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { HeaderComponent } from '../header/header.component';
import { CardstabComponent } from '../cardstab/cardstab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewmatchcardComponent } from '../newmatchcard/newmatchcard.component';
import { RecommentComponent } from '../recomment/recomment.component';
import { NewrecommendsComponent } from '../newrecommends/newrecommends.component';
import { NewMatchFilter } from '../newmatchcard/newmatch-filter.pipe';

describe('OldmatchComponent', () => {
  let component: OldmatchComponent;
  let fixture: ComponentFixture<OldmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldmatchComponent ,
      HomeComponent,
    LoginComponent,
  RegisterComponent,
EditprofileComponent,HeaderComponent,
CardstabComponent,NewmatchcardComponent,RecommentComponent,
NewrecommendsComponent,NewMatchFilter],
      imports: [  NgxPaginationModule, MatIconModule, HttpClientModule,
      AppRoutingModule,
    FormsModule,ReactiveFormsModule,
  MatTabsModule,MatFormFieldModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
