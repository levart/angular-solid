import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget1ContentComponent } from './widget1-content.component';

describe('Widget1ContentComponent', () => {
  let component: Widget1ContentComponent;
  let fixture: ComponentFixture<Widget1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Widget1ContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Widget1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
