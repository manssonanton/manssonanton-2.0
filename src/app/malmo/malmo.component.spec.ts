import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalmoComponent } from './malmo.component';

describe('MalmoComponent', () => {
  let component: MalmoComponent;
  let fixture: ComponentFixture<MalmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
