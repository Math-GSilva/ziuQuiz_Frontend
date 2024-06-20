import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCreationListComponent } from './quiz-creation-list.component';

describe('QuizCreationListComponent', () => {
  let component: QuizCreationListComponent;
  let fixture: ComponentFixture<QuizCreationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCreationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizCreationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
