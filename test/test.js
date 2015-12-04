var valid = require('../'),
  test = require('tape'),
  fs = require('fs');

var REGEN = true;

test('valid -- feature polygon geojson', function(t){
  var polygon = JSON.parse(fs.readFileSync('tests/fixtures/polygon-valid.json'));
  var isValid = valid(polygon);
  console.log(isValid);
  t.ok(isValid);
  t.end();
});

test('valid -- feature linestring geojson', function(t){
  var linestring = JSON.parse(fs.readFileSync('tests/fixtures/linestring-valid.json'));
  var isValid = valid(linestring);
  t.ok(isValid);
  t.end();
});

test('valid -- feature point geojson', function(t){
  var point = JSON.parse(fs.readFileSync('tests/fixtures/point-valid.json'));
  var isValid = valid(point);
  t.ok(isValid);
  t.end();
});

test('invalid -- feature polygon geojson', function(t){
  var polygon = JSON.parse(fs.readFileSync('tests/fixtures/polygon-invalid.json'));
  var isValid = valid(polygon);
  console.log(isValid);
  t.notOk(isValid);
  t.end();
});

test('invalid -- feature linestring geojson', function(t){
  var linestring = JSON.parse(fs.readFileSync('tests/fixtures/linestring-invalid.json'));
  var isValid = valid(linestring);
  t.notOk(isValid);
  t.end();
});

test('invalid -- feature point geojson', function(t){
  var point = JSON.parse(fs.readFileSync('tests/fixtures/point-invalid.json'));
  var isValid = valid(point);
  t.notOk(isValid);
  t.end();
});
