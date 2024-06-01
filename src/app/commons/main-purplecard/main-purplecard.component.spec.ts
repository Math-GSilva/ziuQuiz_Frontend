import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPurplecardComponent } from './main-purplecard.component';

describe('MainPurplecardComponent', () => {
  let component: MainPurplecardComponent;
  let fixture: ComponentFixture<MainPurplecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPurplecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPurplecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
