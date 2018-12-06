import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCreateAnnouncementComponent } from './smart-create-announcement.component';

describe('SmartCreateAnnouncementComponent', () => {
  let component: SmartCreateAnnouncementComponent;
  let fixture: ComponentFixture<SmartCreateAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCreateAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCreateAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
