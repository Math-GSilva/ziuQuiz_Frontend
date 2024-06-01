import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankcardComponent } from './rankcard.component';

describe('RankcardComponent', () => {
  let component: RankcardComponent;
  let fixture: ComponentFixture<RankcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
