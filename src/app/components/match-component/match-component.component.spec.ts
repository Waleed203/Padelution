import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatchComponentComponent } from './match-component.component';

describe('MatchComponentComponent', () => {
  let component: MatchComponentComponent;
  let fixture: ComponentFixture<MatchComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatchComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
