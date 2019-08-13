import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModealBasicComponent } from './modeal-basic.component';

describe('ModealBasicComponent', () => {
  let component: ModealBasicComponent;
  let fixture: ComponentFixture<ModealBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModealBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModealBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
