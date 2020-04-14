import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageJumbotronComponent } from './image-jumbotron.component';

describe('ImageJumbotronComponent', () => {
  let component: ImageJumbotronComponent;
  let fixture: ComponentFixture<ImageJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
