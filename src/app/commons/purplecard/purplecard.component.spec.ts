import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplecardComponent } from './purplecard.component';

describe('PurplecardComponent', () => {
  let component: PurplecardComponent;
  let fixture: ComponentFixture<PurplecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurplecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurplecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
