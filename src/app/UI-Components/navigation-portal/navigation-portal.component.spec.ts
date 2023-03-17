import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPortalComponent } from './navigation-portal.component';

describe('NavigationPortalComponent', () => {
  let component: NavigationPortalComponent;
  let fixture: ComponentFixture<NavigationPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
