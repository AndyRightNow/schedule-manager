import {
  TestBed
} from '@angular/core/testing';
import {
  ScheduleContainerComponent
} from './schedule-container.component';

describe('ScheduleContainerComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleContainerComponent]
    });
  });
  it('should work', () => {
    let fixture = TestBed.createComponent(ScheduleContainerComponent);
    expect(fixture.componentInstance instanceof ScheduleContainerComponent).toBe(true, 'should create ScheduleContainerComponent');
  });
});