import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbTitleComponent } from './imdb-title.component';

describe('ImdbTitleComponent', () => {
  let component: ImdbTitleComponent;
  let fixture: ComponentFixture<ImdbTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
