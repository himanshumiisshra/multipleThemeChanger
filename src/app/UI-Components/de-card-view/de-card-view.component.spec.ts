import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeCardViewComponent } from './de-card-view.component';

describe('DeCardViewComponent', () => {
  let component: DeCardViewComponent;
  let fixture: ComponentFixture<DeCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
