import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontColorAppComponent } from './font-color-app.component';

describe('FontColorAppComponent', () => {
  let component: FontColorAppComponent;
  let fixture: ComponentFixture<FontColorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontColorAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontColorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
