import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizinfoComponent } from './quizinfo.component';

describe('QuizinfoComponent', () => {
  let component: QuizinfoComponent;
  let fixture: ComponentFixture<QuizinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
