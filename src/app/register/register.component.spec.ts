import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { RegisterService } from './register.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


xdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mySpy : any;
  let registerService : RegisterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
        

      ],
      providers:[Ng4LoadingSpinnerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    registerService = fixture.debugElement.injector.get(RegisterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain input element for email and should be blank', () => {
    let element = fixture.debugElement.query(By.css('input'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.value).toBe('');
  });
  it('email field validity',() =>{
    let email=component.registerForm.controls['userEmail'];
    expect(email.valid).toBeFalsy();
    });
    it('should contain input element for userPassword and should be blank', () => {
      let element = fixture.debugElement.query(By.css('input'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.value).toBe('');
    });
    it('userPassword field validity',() =>{
      let password=component.registerForm.controls['userPassword'];
      expect(password.valid).toBeFalsy();
      });
    it('should contain input element for userPasswordC and should be blank', () => {
      let element = fixture.debugElement.query(By.css('input'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.value).toBe('');
    });
    it('userPasswordC field validity',() =>{
      let password=component.registerForm.controls['userPasswordC'];
      expect(password.valid).toBeTruthy();
      });
      it('should contain image', () => {
        let element = fixture.debugElement.query(By.css('input[type="file"]'));
        expect(element).toBeTruthy();
         expect(element.nativeElement.value).toBe('');
      });
      it('image field validity',() =>{
        let email=component.registerForm.controls['userImage'];
        expect(email.valid).toBeFalsy();
        });
        it('should handle call profile method', () => {
          inject([registerService], (injectService: RegisterService) => {
            expect(injectService).toBe(registerService);
          });
          let check: any;
          mySpy = spyOn(registerService, 'saveUser').and.returnValue(Observable.of(check));
          component.registerUser();
          expect(component.registerModel).toEqual(check.res)
          expect(mySpy).toHaveBeenCalled();
        });
        })
          
        
