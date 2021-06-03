import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfplioComponent } from './portfplio.component';

describe('PortfplioComponent', () => {
  let component: PortfplioComponent;
  let fixture: ComponentFixture<PortfplioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfplioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfplioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
