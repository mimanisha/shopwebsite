import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelaryshopComponent } from './jewelaryshop.component';

describe('JewelaryshopComponent', () => {
  let component: JewelaryshopComponent;
  let fixture: ComponentFixture<JewelaryshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelaryshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelaryshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
