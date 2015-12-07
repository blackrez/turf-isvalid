# turf-isvalid

[![build status](https://secure.travis-ci.org/blackrez/turf-isvalid.png)](http://travis-ci.org/blackrez/turf-isvalid)

Test if a geometry is valid or not


### `turf.valid(Feature)`



### Parameters

| parameter | type    | description                        |
| --------- | ------- | ---------------------------------- |
| `Feature` | Feature | input to be tested if valid or not |


### Example

```js
var poly = {
  "type": "Feature",
  "properties": {
    "fill": "#0f0"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-122.801742, 45.48565],
    ]]
  }
}

var isvald = turf.valid(poly);
console.log(isvald)
//=true
```


**Returns** `Boolean`, 

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-isvalid
```

## Tests

```sh
$ npm test
```


