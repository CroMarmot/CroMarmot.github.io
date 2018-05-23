
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCsnavComponent } from './app-csnav.component';

describe('AppCsnavComponent', () => {
  let component: AppCsnavComponent;
  let fixture: ComponentFixture<AppCsnavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCsnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCsnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
