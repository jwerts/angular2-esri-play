import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { MapService } from './map.service';

import MapView = require('esri/views/MapView');
import Point = require('esri/geometry/Point');
import SpatialReference = require('esri/geometry/SpatialReference');

@Component({
  selector: 'esri-map',
  template: '<div id="viewDiv" style="height:100%"><ng-content></ng-content></div>'
})
export class MapComponent {

  @Output()
  viewCreated = new EventEmitter();

  mapView: MapView;

  constructor(private mapService: MapService,
    private elementRef: ElementRef) { }

  ngOnInit() {
    this.mapView = new MapView({
      container: this.elementRef.nativeElement.firstChild,
      map: this.mapService.map,
      center: new Point({
        x: -82.44,
        y: 35.61,
        spatialReference: new SpatialReference({ wkid: 4326 })
      }),
      zoom: 14
    });
    this.viewCreated.next(this.mapView);
  }
}
