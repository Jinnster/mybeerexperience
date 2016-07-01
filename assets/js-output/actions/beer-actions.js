'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBeersSuccess = getBeersSuccess;
exports.beerDetailSuccess = beerDetailSuccess;

var _actTypes = require('../actions/act-types');

var types = _interopRequireWildcard(_actTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Get beers by success
 * @param {object} beers
 * @return object
 */
function getBeersSuccess(beers) {
    return {
        type: types.GET_BEERS_SUCCESS,
        beers: beers
    };
}

/**
 * Add beer to localStorage
 * @param {object} beerDetail
 * @return object
 */
/**
 * Created by Jinhua on 27-6-2016.
 */

function beerDetailSuccess(beerDetail) {
    return {
        type: types.BEER_DETAIL_SUCCESS,
        beerDetail: beerDetail
    };
}
//
//export function addBeer(text) {
//    return {
//        type: types.ADD_BEER,
//        text
//    };
//}