import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirifswitchforComponent } from './dirifswitchfor.component';

describe('DirifswitchforComponent', () => {
  let component: DirifswitchforComponent;
  let fixture: ComponentFixture<DirifswitchforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirifswitchforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirifswitchforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
