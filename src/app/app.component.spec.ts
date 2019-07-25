import { async } from '@angular/core/testing';
import { createTestComponentFactory } from '@netbasal/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const createComponent = createTestComponentFactory(AppComponent);

  beforeEach(async(() => createComponent()));

  it.each([[1], [2]])('should work %s', () => {});
});
