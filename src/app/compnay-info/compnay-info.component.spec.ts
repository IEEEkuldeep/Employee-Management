import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnayInfoComponent } from './compnay-info.component';

describe('CompnayInfoComponent', () => {
  let component: CompnayInfoComponent;
  let fixture: ComponentFixture<CompnayInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompnayInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompnayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
