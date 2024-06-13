import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCreationMainComponent } from './quiz-creation-main.component';

describe('QuizCreationMainComponent', () => {
  let component: QuizCreationMainComponent;
  let fixture: ComponentFixture<QuizCreationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCreationMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizCreationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
