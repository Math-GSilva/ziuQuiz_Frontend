import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTextfieldComponent } from './common-textfield.component';

describe('CommonTextfieldComponent', () => {
  let component: CommonTextfieldComponent;
  let fixture: ComponentFixture<CommonTextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonTextfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
