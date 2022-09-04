import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnuffleComponent } from './snuffle.component';

describe('SnuffleComponent', () => {
  let component: SnuffleComponent;
  let fixture: ComponentFixture<SnuffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnuffleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
