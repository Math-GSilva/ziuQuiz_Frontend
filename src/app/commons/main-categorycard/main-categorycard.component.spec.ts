import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategorycardComponent } from './main-categorycard.component';

describe('MainCategorycardComponent', () => {
  let component: MainCategorycardComponent;
  let fixture: ComponentFixture<MainCategorycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCategorycardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCategorycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
