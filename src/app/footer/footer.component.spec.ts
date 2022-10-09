import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { MatTabsModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardstabComponent } from '../cardstab/cardstab.component';

describe('CardstabComponent', () => {
  let component: CardstabComponent;
  let fixture: ComponentFixture<CardstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardstabComponent ],
      imports: [MatTabsModule,HttpClientModule,BrowserAnimationsModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
