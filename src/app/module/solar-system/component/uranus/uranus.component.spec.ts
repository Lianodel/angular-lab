import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UranusComponent } from './uranus.component';

describe('UranusComponent', () => {
  let component: UranusComponent;
  let fixture: ComponentFixture<UranusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UranusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UranusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
