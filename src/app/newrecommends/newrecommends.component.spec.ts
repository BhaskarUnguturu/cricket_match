import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatIconModule} from '@angular/material/icon';
import { NewrecommendsComponent } from './newrecommends.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewMatchFilter } from '../newmatchcard/newmatch-filter.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { HeaderComponent } from '../header/header.component';
import { CardstabComponent } from '../cardstab/cardstab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewmatchcardComponent } from '../newmatchcard/newmatchcard.component';
import { MatTabsModule, MatFormFieldModule } from '@angular/material';
import { OldmatchComponent } from '../oldmatch/oldmatch.component';
import { RecommentComponent } from '../recomment/recomment.component';

describe('NewrecommendsComponent', () => {
  let component: NewrecommendsComponent;
  let fixture: ComponentFixture<NewrecommendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrecommendsComponent,NewMatchFilter,HomeComponent,
      LoginComponent,
    RegisterComponent,
  EditprofileComponent,
HeaderComponent,CardstabComponent,
NewmatchcardComponent ,
OldmatchComponent,
RecommentComponent],
      imports: [ NgxPaginationModule ,
        HttpClientModule,AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,MatTabsModule,
        ReactiveFormsModule,FormsModule,MatFormFieldModule,
        MatIconModule
      ],
        providers: [HttpClient],
        
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrecommendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
