import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItwisDemosComponent } from './itwis-demos.component';

describe('ItwisDemosComponent', () => {
  let component: ItwisDemosComponent;
  let fixture: ComponentFixture<ItwisDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItwisDemosComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItwisDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
