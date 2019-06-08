import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSSFLoginComponent } from './jssf-login.component';

describe('JSSFLoginComponent', () => {
  let component: JSSFLoginComponent;
  let fixture: ComponentFixture<JSSFLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSSFLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSSFLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
