import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnieComponent } from './connie.component';

describe('ConnieComponent', () => {
  let component: ConnieComponent;
  let fixture: ComponentFixture<ConnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
