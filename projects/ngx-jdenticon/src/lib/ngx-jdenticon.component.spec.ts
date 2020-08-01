import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJdenticonComponent } from './ngx-jdenticon.component';

describe('NgxJdenticonComponent', () => {
  let component: NgxJdenticonComponent;
  let fixture: ComponentFixture<NgxJdenticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJdenticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJdenticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
