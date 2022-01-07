import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedFooterComponent } from './started-footer.component';

describe('StartedFooterComponent', () => {
  let component: StartedFooterComponent;
  let fixture: ComponentFixture<StartedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
