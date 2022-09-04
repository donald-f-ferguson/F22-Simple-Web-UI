import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbAllComponent } from './imdb-all.component';

describe('ImdbAllComponent', () => {
  let component: ImdbAllComponent;
  let fixture: ComponentFixture<ImdbAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
