import {
  TestBed
} from '@angular/core/testing';
import {
  ContainerComponent
} from './container.component';

describe('ContainerComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent]
    });
  });
  it('should work', () => {
    let fixture = TestBed.createComponent(ContainerComponent);
    expect(fixture.componentInstance instanceof ContainerComponent).toBe(true, 'should create ContainerComponent');
  });
});