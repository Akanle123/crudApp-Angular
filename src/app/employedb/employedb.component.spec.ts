import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedbComponent } from './employedb.component';

describe('EmployedbComponent', () => {
  let component: EmployedbComponent;
  let fixture: ComponentFixture<EmployedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployedbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
