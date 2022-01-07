import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenedElementComponent } from './shortened-element.component';

describe('ShortenedElementComponent', () => {
  let component: ShortenedElementComponent;
  let fixture: ComponentFixture<ShortenedElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenedElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
