import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgbotonComponent } from './imgboton.component';

describe('ImgbotonComponent', () => {
  let component: ImgbotonComponent;
  let fixture: ComponentFixture<ImgbotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgbotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgbotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
