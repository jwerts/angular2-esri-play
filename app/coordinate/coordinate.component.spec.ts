import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CoordinateComponent } from './coordinate.component';

let fixture: ComponentFixture<CoordinateComponent>;
let component: CoordinateComponent;
let de: DebugElement;
let el: HTMLElement;
let $mapDiv;
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

  // add a div to the body
  $mapDiv = $('<div>', { id: 'mapDiv' }).appendTo('body');
  mapDivEl = $mapDiv[0];

  // mock required MapView props/functions
  component.mapView = <any>{
    container: mapDivEl,
    toMap: (point) => {
      return {
        longitude: 5,
        latitude: 10
      };
    },
    zoom: 7,
    scale: 500
  };

  // runs ngOnInit
  fixture.detectChanges();
});

describe('Coordinate', () => {
  it('should update lat/long on mousemove', () => {
    mapDivEl.dispatchEvent(new Event('mousemove', {
      bubbles: true,
      cancelable: true
    }));
    // pageX, pageY
    fixture.detectChanges();
    expect(el.querySelector('#longitude').innerHTML).toBe('5.000000');
    expect(el.querySelector('#latitude').innerHTML).toBe('10.000000');
    expect(el.querySelector('#zoom').innerHTML).toBe('7');
    expect(el.querySelector('#scale').innerHTML).toBe('500');
  });
});
