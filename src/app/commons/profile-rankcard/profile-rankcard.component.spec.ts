import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRankcardComponent } from './profile-rankcard.component';

describe('ProfileRankcardComponent', () => {
  let component: ProfileRankcardComponent;
  let fixture: ComponentFixture<ProfileRankcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRankcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileRankcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
