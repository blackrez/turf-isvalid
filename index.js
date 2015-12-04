// depend on jsts for now https://github.com/bjornharrtell/jsts/blob/master/examples/overlay.html
var jsts = require('jsts');

/*@module turf/valid
 * @category Helper
 * @param {Feature} Feature input to be tested if valid or not
 * @return {Boolean}
 *
 * @example
 * var poly = {
 *   "type": "Feature",
 *   "properties": {
 *     "fill": "#0f0"
 *   },
 *   "geometry": {
 *     "type": "Polygon",
 *     "coordinates": [[
 *       [-122.801742, 45.48565],
 *     ]]
 *   }
 * }
 *
 * var isvald = turf.valid(poly);
 * console.log(isvald)
 * //=true
 */

module.exports = function(geom) {

  var reader = new jsts.io.GeoJSONReader();
  var g = reader.read(JSON.stringify(geom));
  return g.geometry.isValid()

};
