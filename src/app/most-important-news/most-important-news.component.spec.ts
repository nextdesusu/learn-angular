import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostImportantNewsComponent } from './most-important-news.component';

describe('MostImportantNewsComponent', () => {
  let component: MostImportantNewsComponent;
  let fixture: ComponentFixture<MostImportantNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostImportantNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostImportantNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
