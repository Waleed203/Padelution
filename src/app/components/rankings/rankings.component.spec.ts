import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RankingsComponent } from './rankings.component';

describe('RankingsComponent', () => {
  let component: RankingsComponent;
  let fixture: ComponentFixture<RankingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RankingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
