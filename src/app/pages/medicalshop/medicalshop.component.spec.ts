import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalshopComponent } from './medicalshop.component';

describe('MedicalshopComponent', () => {
  let component: MedicalshopComponent;
  let fixture: ComponentFixture<MedicalshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
