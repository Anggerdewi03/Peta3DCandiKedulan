// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
(function(){function p(l){var n=0,b=0,f=l.length,a=l[b];for(b;b<f-1;b++){var c=l[b+1];n+=(c[0]-a[0])*(c[1]+a[1]);a=c}return 0<=n}function q(){function l(b){var f;if(b){if((b.x&&"NaN"!==b.x||0===b.x)&&(b.y&&"NaN"!==b.y||0===b.y)){var a="Point";var c=[b.x,b.y]}else if(b.points&&b.points.length)a="MultiPoint",c=b.points;else if(b.paths&&b.paths.length)b=b.paths,1===b.length?(a="LineString",c=b[0]):(a="MultiLineString",c=b);else if(b.rings&&b.rings.length){a=[];b=b.rings;for(f=0;f<b.length;f++)c=b[f],
p(c)?a.push([c]):0<a.length&&a[a.length-1].push(c);1<a.length?(c=a,a="MultiPolygon"):(c=a.pop(),a="Polygon")}f=c&&a?{type:a,coordinates:c}:null}return f}function n(b){var f=null,a;if(b&&(f={type:"Feature"},b.geometry&&(f.geometry=l(b.geometry)),b.attributes)){var c={};for(a in b.attributes)c[a]=b.attributes[a];f.properties=c}return f}return{toGeoJson:function(b){var f;if(b)if(b.features){var a={type:"FeatureCollection",features:[]};var c=b.features;for(b=0;b<c.length;b++)(f=n(c[b]))&&a.features.push(f)}else a=
b.geometry?n(b):l(b);return a}}}function r(){function l(a){if("Point"===a)var c="esriGeometryPoint";else if("MultiPoint"===a){c="esriGeometryMultipoint";var d="points"}else if("LineString"===a||"MultiLineString"===a)c="esriGeometryPolyline",d="paths";else if("Polygon"===a||"MultiPolygon"===a)c="esriGeometryPolygon",d="rings";return{type:c,geomHolder:d}}function n(a){var c,d=[];var g=0;for(c=a.length;g<c;g++){var e=a[g];0===g!==p(e)&&(e=e.reverse());d.push(e)}return d}function b(a){var c;if("GeometryCollection"===
a.type){var d=[a.geometries.shift()];var g=l(d[0].type);for(c=0;c<a.geometries.length;c++){var e=g.type;var h=a.geometries[c].type;var m=!1;"esriGeometryPoint"!==e&&"esriGeometryMultipoint"!==e||"Point"!==h&&"MultiPoint"!==h?"esriGeometryPolyline"!==e||"LineString"!==h&&"MultiLineString"!==h?"esriGeometryPolygon"!==e||"Polygon"!==h&&"MultiPolygon"!==h||(m=!0):m=!0:m=!0;m&&d.push(a.geometries[c])}}else g=l(a.type),d=[a];"esriGeometryPoint"===g.type&&1<d.length&&(g=l("MultiPoint"));a={spatialReference:{wkid:4326}};
if("esriGeometryPoint"===g.type)0===d[0].coordinates.length?(a.x=null,a.y=null):(a.x=d[0].coordinates[0],a.y=d[0].coordinates[1]);else for(a[g.geomHolder]=[],c=0;c<d.length;c++){m=h=e=void 0;var k=d[c];if("MultiPoint"===k.type||"MultiLineString"===k.type)e=k.coordinates;else if("Point"===k.type||"LineString"===k.type)e=[k.coordinates];else if("Polygon"===k.type)e=n(k.coordinates);else if("MultiPolygon"===k.type)for(e=[],m=0,h=k.coordinates.length;m<h;m++)e.push(n(k.coordinates[m])[0]);h=e;for(e=0;e<
h.length;e++)a[g.geomHolder].push(h[e])}return a}function f(a){var c;if(a){var d={};a.geometry&&(d.geometry=b(a.geometry));if(a.properties){var g={};for(c in a.properties)g[c]=a.properties[c];d.attributes=g}}return d}return{toEsri:function(a){var c;if(a)if("FeatureCollection"===a.type){var d={features:[]};var g=a.features;for(a=0;a<g.length;a++)(c=f(g[a]))&&d.features.push(c)}else d="Feature"===a.type?f(a):b(a);return d}}}var t="undefined"!==typeof exports&&null!==exports?exports:this;if("function"===
typeof define){var u={esriConverter:q,geoJsonConverter:r};define([],function(){return u})}else t.esriConverter=q,t.geoJsonConverter=r}).call(this);