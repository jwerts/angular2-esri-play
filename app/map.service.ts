import { Injectable } from '@angular/core';

import Map = require('esri/Map');
import GraphicsLayer = require('esri/layers/GraphicsLayer');

@Injectable()
export class MapService {
  map: Map;
  pointGraphicsLayer: GraphicsLayer;
  constructor() {
    this.map = new Map({
      basemap: 'topo'
    });
  }
}
