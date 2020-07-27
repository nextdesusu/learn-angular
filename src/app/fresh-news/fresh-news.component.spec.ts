import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshNewsComponent } from './fresh-news.component';

describe('FreshNewsComponent', () => {
  let component: FreshNewsComponent;
  let fixture: ComponentFixture<FreshNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
