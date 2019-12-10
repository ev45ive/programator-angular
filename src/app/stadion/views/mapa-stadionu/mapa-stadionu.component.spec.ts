import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaStadionuComponent } from './mapa-stadionu.component';

describe('MapaStadionuComponent', () => {
  let component: MapaStadionuComponent;
  let fixture: ComponentFixture<MapaStadionuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaStadionuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaStadionuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
