import { TestBed, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CoordinateComponent } from './coordinate.component';

let fixture: ComponentFixture<CoordinateComponent>;
let component: CoordinateComponent;
let de: DebugElement;
let el: HTMLElement;
let mapDivEl: Element;
beforeEach(() => {
  // refine the test module by declaring the test component
  TestBed.configureTestingModule({
    declarations: [CoordinateComponent]
  });

  // create component and test fixture
  fixture = TestBed.createComponent(CoordinateComponent);
  el = fixture.nativeElement;

  // get test component from the fixture
  component = fixture.componentInstance;

  let $mapDiv = $('<div>', { id: 'mapDiv' }).appendTo('body');
  mapDivEl = $mapDiv.context;
  component.mapView = <any>{
    container: mapDivEl
  };
});

describe('Coordinate', () => {
  it('should update lat/long on mousemove', () => {
    $(mapDivEl).triggerHandler('mousemove', {
      pageX: 0,
      pageY: 1
    });
    expect(el.querySelector('#longitude').innerHTML).toBe('0');
  });
});
