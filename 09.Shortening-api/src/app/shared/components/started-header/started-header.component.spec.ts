import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedHeaderComponent } from './started-header.component';

describe('StartedHeaderComponent', () => {
  let component: StartedHeaderComponent;
  let fixture: ComponentFixture<StartedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
