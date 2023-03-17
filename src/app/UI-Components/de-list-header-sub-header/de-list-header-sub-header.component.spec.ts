import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeListHeaderSubHeaderComponent } from './de-list-header-sub-header.component';

describe('DeListHeaderSubHeaderComponent', () => {
  let component: DeListHeaderSubHeaderComponent;
  let fixture: ComponentFixture<DeListHeaderSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeListHeaderSubHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeListHeaderSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
