import { Injectable } from '@angular/core';

import Map = require('esri/Map');

@Injectable()
export class MapService {
  map: Map;
  constructor() {
    this.map = new Map({
      basemap: 'topo'
    });
  }
}
