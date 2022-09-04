import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumbiaAllComponent } from './columbia-all.component';

describe('ImdbAllComponent', () => {
  let component: ColumbiaAllComponent;
  let fixture: ComponentFixture<ColumbiaAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumbiaAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumbiaAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
