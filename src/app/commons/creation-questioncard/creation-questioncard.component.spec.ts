import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuestioncardComponent } from './creation-questioncard.component';

describe('CreationQuestioncardComponent', () => {
  let component: CreationQuestioncardComponent;
  let fixture: ComponentFixture<CreationQuestioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationQuestioncardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationQuestioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
