import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdbannerComponent } from './adbanner.component';

describe('AdbannerComponent', () => {
  let component: AdbannerComponent;
  let fixture: ComponentFixture<AdbannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AdbannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
