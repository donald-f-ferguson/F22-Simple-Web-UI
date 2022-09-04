import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumbiaStudentComponent } from './imdbartist.component';

describe('ImdbartistComponent', () => {
  let component: ColumbiaStudentComponent;
  let fixture: ComponentFixture<ColumbiaStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumbiaStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumbiaStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
