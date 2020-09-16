import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsakaComponent } from './osaka.component';

describe('OsakaComponent', () => {
  let component: OsakaComponent;
  let fixture: ComponentFixture<OsakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
