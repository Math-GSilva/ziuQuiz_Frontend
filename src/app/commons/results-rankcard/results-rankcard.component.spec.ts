import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsRankcardComponent } from './results-rankcard.component';

describe('ResultsRankcardComponent', () => {
  let component: ResultsRankcardComponent;
  let fixture: ComponentFixture<ResultsRankcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsRankcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultsRankcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
