var isvalid = require('../'),
  test = require('tape'),
  fs = require('fs');

var REGEN = true;

test('valid -- feature polygon geojson', function(t){
  var polygon = JSON.parse(fs.readFileSync(__dirname + '/fixtures/valid/polygon.json'));
  t.ok(isvalid(polygon));
  t.end();
});

test('valid -- feature linestring geojson', function(t){
  var linestring = JSON.parse(fs.readFileSync(__dirname + '/fixtures/valid/linestring.json'));
  t.ok(isvalid(linestring));
  t.end();
});

test('valid -- feature point geojson', function(t){
  var point = JSON.parse(fs.readFileSync(__dirname + '/fixtures/valid/point.json'));
  t.ok(isvalid(point));
  t.end();
});

test('invalid -- feature polygon geojson', function(t){
  var polygon = JSON.parse(fs.readFileSync(__dirname + '/fixtures/invalid/polygon.json'));
  t.notOk(isvalid(polygon));
  t.end();
});

test('invalid -- feature polygon geojson holes', function(t){
  var polygon = JSON.parse(fs.readFileSync(__dirname + '/fixtures/invalid/polygon-holes.json'));
  t.notOk(isvalid(polygon));
  t.end();
});

test('invalid -- feature polygon geojson intersects rings', function(t){
  var polygon = JSON.parse(fs.readFileSync(__dirname + '/fixtures/invalid/polygon-intersectingring.json'));
  t.notOk(isvalid(polygon));
  t.end();
});

test('invalid -- feature linestring geojson', function(t){
  var linestring = JSON.parse(fs.readFileSync(__dirname + '/fixtures/invalid/linestring.json'));
  t.notOk(isvalid(linestring));
  t.end();
});

test('invalid -- feature point geojson', function(t){
  var point = JSON.parse(fs.readFileSync(__dirname + '/fixtures/invalid/point.json'));
  t.notOk(isvalid(point));
  t.end();
});
