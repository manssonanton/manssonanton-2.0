import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyotoComponent } from './kyoto.component';

describe('KyotoComponent', () => {
  let component: KyotoComponent;
  let fixture: ComponentFixture<KyotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
