import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeForcesComponent } from './code-forces.component';

describe('CodeForcesComponent', () => {
  let component: CodeForcesComponent;
  let fixture: ComponentFixture<CodeForcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeForcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeForcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
