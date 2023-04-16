import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnictureshopComponent } from './furnictureshop.component';

describe('FurnictureshopComponent', () => {
  let component: FurnictureshopComponent;
  let fixture: ComponentFixture<FurnictureshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnictureshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnictureshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
