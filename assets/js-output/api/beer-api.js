'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBeers = getBeers;
exports.getBeerDetail = getBeerDetail;
exports.searchBeers = searchBeers;
exports.addBeerToCollection = addBeerToCollection;
exports.addNew = addNew;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _beerActions = require('../actions/beer-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBeers() {
    return _axios2.default.get('https://stud.hosted.hr.nl/0865131/testbier/beer_api.php').then(function (response) {
        _store2.default.dispatch((0, _beerActions.getBeersSuccess)(response.data));
        return response;
    });
}

/**
 * Get Details beer
 * @param {int} beerId
 * @return object
 */
/**
 * Created by Jinhua on 22-6-2016.
 */

function getBeerDetail(beerId) {

    // Start with an empty profile object and build it up
    // from multiple XHR requests.
    var detail = {};

    // Get the user data from the API
    return _axios2.default.get('https://stud.hosted.hr.nl/0865131/testbier/beer_api.php?beerid=' + beerId).then(function (response) {

        var beer = response.data;
        detail.name = beer.name;
        detail.abv = beer.abv;
        detail.brewer = beer.brewer;
        detail.country = beer.country;

        // Then use the github attribute from the previous request to
        // sent two XHR requests to GitHub's API. The first for their
        // general user info, and the second for their repos.

        return Promise.all([]).then(function (results) {

            _store2.default.dispatch((0, _beerActions.beerDetailSuccess)(detail));
            return;
        });
    });
}

/**
 * Search
 * @param {string} query
 * @return object
 */
function searchBeers() {
    var query = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    console.log(query);
    return _axios2.default.get('https://stud.hosted.hr.nl/0865131/testbier/beer_api.php?query=' + query).then(function (response) {
        _store2.default.dispatch((0, _beerActions.getBeersSuccess)(response.data));
        return response;
    });
}

/**
 * Add beer to Collection
 * @return object
 */
function addBeerToCollection() {
    _store2.default.dispatch((0, _beerActions.addBeer)());
    return;
}

/**
 * Add beer to localStorage
 * @param {int} beerId
 * @param {string} beerName
 * @param {string} beerAbv
 * @param {string} beerType
 * @param {string} beerBrewer
 * @param {string} beerCountry
 * @return object
 */

function addNew(beerId, beerName, beerAbv, beerType, beerBrewer, beerCountry) {
    console.log('nieuw bier is toegevoegd...' + beerId + beerName, beerAbv, beerType, beerBrewer, beerCountry);

    var beerDetails = { biernaam: beerName, alcohol: beerAbv, biertype: beerType, brouwerij: beerBrewer, land: beerCountry };

    localStorage.setItem(beerId, JSON.stringify(beerDetails));
    return;
}