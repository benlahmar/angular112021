import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlogComponent } from './formlog.component';

describe('FormlogComponent', () => {
  let component: FormlogComponent;
  let fixture: ComponentFixture<FormlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
