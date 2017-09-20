import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import MapView = require('esri/views/MapView');
import ScreenPoint = require('esri/geometry/ScreenPoint');
import Point = require('esri/geometry/Point');

@Component({
  selector: 'coordinate',
  template: require('./coordinate.component.html'),
  styles: [require('./coordinate.component.css')]
})
export class CoordinateComponent implements OnInit, OnDestroy {
  @Input('map-view')
  mapView: MapView;
  private mapViewElement: HTMLDivElement;

  private _longitude = 0;
  get longitude(): number { return this._longitude; }

  private _latitude = 0;
  get latitude(): number { return this._latitude; }

  constructor() {

  }

  ngOnInit() {
    this.mapViewElement = <HTMLDivElement><any>this.mapView.container;
    this.mapViewElement.addEventListener('mousemove', <any>this);
  }

  ngOnDestroy() {
    if (this.mapViewElement) {
      this.mapViewElement.removeEventListener('mousemove', <any>this);
    }
  }

  handleEvent(event: Event) {
    switch (event.type) {
      case 'mousemove':
        this.onMouseMove(<MouseEvent>event);
        break;
    }
  }

  private onMouseMove(e: MouseEvent) {
    let rect = this.mapViewElement.getBoundingClientRect();
    let point = new ScreenPoint({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    let mapPoint: Point = this.mapView.toMap(point);
    if (mapPoint !== null) {
      this._longitude = mapPoint.longitude;
      this._latitude = mapPoint.latitude;
    }
  }

}
