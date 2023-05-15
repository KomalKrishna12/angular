import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUiDemoComponent } from './material-ui-demo.component';

describe('MaterialUiDemoComponent', () => {
  let component: MaterialUiDemoComponent;
  let fixture: ComponentFixture<MaterialUiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUiDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
