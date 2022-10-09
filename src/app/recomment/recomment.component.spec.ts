import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommentComponent } from './recomment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatFormFieldModule, MatTabsModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { HeaderComponent } from '../header/header.component';
import { CardstabComponent } from '../cardstab/cardstab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewmatchcardComponent } from '../newmatchcard/newmatchcard.component';
import { OldmatchComponent } from '../oldmatch/oldmatch.component';
import { NewrecommendsComponent } from '../newrecommends/newrecommends.component';
import { NewMatchFilter } from '../newmatchcard/newmatch-filter.pipe';

describe('RecommentComponent', () => {
  let component: RecommentComponent;
  let fixture: ComponentFixture<RecommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommentComponent,
      HomeComponent,LoginComponent,
    RegisterComponent,EditprofileComponent,
  HeaderComponent,
CardstabComponent ,
NewmatchcardComponent,OldmatchComponent,NewrecommendsComponent,
NewMatchFilter],
      imports: [ NgxPaginationModule, HttpClientModule,
      MatIconModule,AppRoutingModule,
    FormsModule,ReactiveFormsModule,
  MatFormFieldModule,MatTabsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
