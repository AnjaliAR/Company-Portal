import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNetwrokComponent } from './my-netwrok.component';

describe('MyNetwrokComponent', () => {
  let component: MyNetwrokComponent;
  let fixture: ComponentFixture<MyNetwrokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNetwrokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNetwrokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
