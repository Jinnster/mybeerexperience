/**
 * Created by Jinhua on 27-6-2016.
 */

import * as types from '../actions/act-types';

/**
 * Get beers by success
 * @param {object} beers
 * @return object
 */
export function getBeersSuccess(beers) {
    return {
        type: types.GET_BEERS_SUCCESS,
        beers
    };
}

/**
 * Add beer to localStorage
 * @param {object} beerDetail
 * @return object
 */
export function beerDetailSuccess(beerDetail) {
    return {
        type: types.BEER_DETAIL_SUCCESS,
        beerDetail
    };
}
//
//export function addBeer(text) {
//    return {
//        type: types.ADD_BEER,
//        text
//    };
//}