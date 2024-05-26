import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectioncardComponent } from './colectioncard.component';

describe('ColectioncardComponent', () => {
  let component: ColectioncardComponent;
  let fixture: ComponentFixture<ColectioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColectioncardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColectioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
