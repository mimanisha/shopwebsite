import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlosarryshopComponent } from './glosarryshop.component';

describe('GlosarryshopComponent', () => {
  let component: GlosarryshopComponent;
  let fixture: ComponentFixture<GlosarryshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlosarryshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlosarryshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
