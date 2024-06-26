import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayquizComponent } from './playquiz.component';

describe('PlayquizComponent', () => {
  let component: PlayquizComponent;
  let fixture: ComponentFixture<PlayquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayquizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
