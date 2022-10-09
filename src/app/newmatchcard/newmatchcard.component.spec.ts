import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmatchcardComponent } from './newmatchcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatTabsModule} from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewMatchFilter } from './newmatch-filter.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';

import { HeaderComponent } from '../header/header.component';
import { CardstabComponent } from '../cardstab/cardstab.component';
import { OldmatchComponent } from '../oldmatch/oldmatch.component';
import { RecommentComponent } from '../recomment/recomment.component';
import { NewrecommendsComponent } from '../newrecommends/newrecommends.component';


describe('NewmatchcardComponent', () => {
  let component: NewmatchcardComponent;
  let fixture: ComponentFixture<NewmatchcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmatchcardComponent,NewMatchFilter,HomeComponent,
      LoginComponent,RegisterComponent,
      EditprofileComponent,HeaderComponent,
    CardstabComponent,OldmatchComponent,
  RecommentComponent,NewrecommendsComponent ],
      imports: [ FormsModule,MatFormFieldModule,
      MatIconModule,NgxPaginationModule,HttpClientModule ,ReactiveFormsModule,
      MatInputModule,BrowserAnimationsModule,
    BrowserModule,AppRoutingModule,MatTabsModule],
      providers:[HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmatchcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
