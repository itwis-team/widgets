import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyWrapperComponent } from './copy-wrapper.component';

describe('CopyWrapperComponent', () => {
  let component: CopyWrapperComponent;
  let fixture: ComponentFixture<CopyWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
