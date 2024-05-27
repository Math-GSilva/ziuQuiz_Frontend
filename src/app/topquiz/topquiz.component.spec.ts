import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopquizComponent } from './topquiz.component';

describe('TopquizComponent', () => {
  let component: TopquizComponent;
  let fixture: ComponentFixture<TopquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopquizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
