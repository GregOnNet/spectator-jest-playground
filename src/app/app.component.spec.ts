import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it.each([[1], [2]])('should work %s', () => {});
});
