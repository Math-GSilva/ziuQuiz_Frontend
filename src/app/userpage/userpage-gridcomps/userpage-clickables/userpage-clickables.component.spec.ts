import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpageClickablesComponent } from './userpage-clickables.component';

describe('UserpageClickablesComponent', () => {
  let component: UserpageClickablesComponent;
  let fixture: ComponentFixture<UserpageClickablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserpageClickablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserpageClickablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
