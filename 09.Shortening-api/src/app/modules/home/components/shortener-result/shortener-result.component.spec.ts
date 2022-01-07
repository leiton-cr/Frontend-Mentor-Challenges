import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerResultComponent } from './shortener-result.component';

describe('ShortenerResultComponent', () => {
  let component: ShortenerResultComponent;
  let fixture: ComponentFixture<ShortenerResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenerResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
