import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewsCheckboxComponent } from './my-news-checkbox.component';

describe('MyNewsCheckboxComponent', () => {
  let component: MyNewsCheckboxComponent;
  let fixture: ComponentFixture<MyNewsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewsCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
