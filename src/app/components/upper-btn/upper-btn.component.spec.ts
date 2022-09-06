import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperBtnComponent } from './upper-btn.component';

describe('UpperBtnComponent', () => {
  let component: UpperBtnComponent;
  let fixture: ComponentFixture<UpperBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
