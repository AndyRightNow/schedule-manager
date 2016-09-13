import {
  TestBed
} from '@angular/core/testing';
import {
  EventComponent
} from './event.component';

describe('MenuBarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventComponent]
    });
  });
  it('should work', () => {
    let fixture = TestBed.createComponent(EventComponent);
    expect(fixture.componentInstance instanceof EventComponent).toBe(true, 'should create EventComponent');
  });
});