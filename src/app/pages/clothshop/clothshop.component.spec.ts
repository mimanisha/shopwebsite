import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothshopComponent } from './clothshop.component';

describe('ClothshopComponent', () => {
  let component: ClothshopComponent;
  let fixture: ComponentFixture<ClothshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
