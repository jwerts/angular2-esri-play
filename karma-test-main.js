var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    //if (/\.spec\.ts/.test(file)) {
    if (/karma-test-shim\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

window.dojoConfig = {
  packages: [{
    name: "local",
    location: "/base"
  }, {
    name: "esri",
    location: "http://js.arcgis.com/4.5/esri"
  }, {
    name: "dojo",
    location: "http://js.arcgis.com/4.5/dojo"
  }, {
    name: "dojox",
    location: "http://js.arcgis.com/4.5/dojox"
  }, {
    name: "dijit",
    location: "http://js.arcgis.com/4.5/dijit"
  }, {
    name: 'moment',
    location: 'http://js.arcgis.com/4.5/moment',
    main: 'moment'
  }],
  async: false
};


/**
 * This function must be defined and is called back by the dojo adapter
 * @returns {string} a list of dojo spec/test modules to register with your testing framework
 */
window.__karma__.dojoStart = function () {
  return tests;
};