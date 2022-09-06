import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItwisWidgetComponent } from './itwis-widget.component';

describe('ItwisWidgetComponent', () => {
  let component: ItwisWidgetComponent;
  let fixture: ComponentFixture<ItwisWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItwisWidgetComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItwisWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
