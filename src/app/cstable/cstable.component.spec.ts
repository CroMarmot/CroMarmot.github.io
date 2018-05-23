
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstableComponent } from './cstable.component';

describe('CstableComponent', () => {
  let component: CstableComponent;
  let fixture: ComponentFixture<CstableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CstableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
