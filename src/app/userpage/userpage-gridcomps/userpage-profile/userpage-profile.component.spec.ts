import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpageProfileComponent } from './userpage-profile.component';

describe('UserpageProfileComponent', () => {
  let component: UserpageProfileComponent;
  let fixture: ComponentFixture<UserpageProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserpageProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserpageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
