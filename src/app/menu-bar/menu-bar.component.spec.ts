import {
  TestBed
} from '@angular/core/testing';
import {
  MenuBarComponent
} from './menu-bar.component';

describe('MenuBarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBarComponent]
    });
  });
  it('should work', () => {
    let fixture = TestBed.createComponent(MenuBarComponent);
    expect(fixture.componentInstance instanceof MenuBarComponent).toBe(true, 'should create MenuBarComponent');
  });
});