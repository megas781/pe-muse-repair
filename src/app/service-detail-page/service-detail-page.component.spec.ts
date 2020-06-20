import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailPageComponent } from './service-detail-page.component';

describe('ServiceDetailPageComponent', () => {
  let component: ServiceDetailPageComponent;
  let fixture: ComponentFixture<ServiceDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
