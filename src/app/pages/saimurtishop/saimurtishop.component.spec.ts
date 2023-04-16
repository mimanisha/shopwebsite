import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaimurtishopComponent } from './saimurtishop.component';

describe('SaimurtishopComponent', () => {
  let component: SaimurtishopComponent;
  let fixture: ComponentFixture<SaimurtishopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaimurtishopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaimurtishopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
