import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget2ContentComponent } from './widget2-content.component';

describe('Widget2ContentComponent', () => {
  let component: Widget2ContentComponent;
  let fixture: ComponentFixture<Widget2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Widget2ContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Widget2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
