/**
 * Created by Jinhua on 22-6-2016.
 */

import axios from 'axios';
import store from '../store';
import { getBeersSuccess, beerDetailSuccess, addBeer } from '../actions/beer-actions';

export function getBeers() {
    return axios.get('https://stud.hosted.hr.nl/0865131/testbier/beer_api.php')
        .then(response => {
            store.dispatch(getBeersSuccess(response.data));
            return response;
        });
}

/**
 * Get Details beer
 * @param {int} beerId
 * @return object
 */
export function getBeerDetail(beerId) {

    // Start with an empty profile object and build it up
    // from multiple XHR requests.
    let detail = {};

    // Get the user data from the API
    return axios.get('https://stud.hosted.hr.nl/0865131/testbier/beer_api.php?beerid='+ beerId)
        .then(response => {

            let beer = response.data;
            detail.name = beer.name;
            detail.abv = beer.abv;
            detail.brewer = beer.brewer;
            detail.country = beer.country;

            // Then use the github attribute from the previous request to
            // sent two XHR requests to GitHub's API. The first for their
            // general user info, and the second for their repos.

            return Promise.all([
            ]).then(results => {

                store.dispatch(beerDetailSuccess(detail));
                return;

            });

        });

}

/**
 * Search
 * @param {string} query
 * @return object
 */
export function searchBeers(query = '') {
    console.log(query);
    return axios.get('https://stud.hosted.hr.nl/0865131/testbier/beer_api.php?query='+ query)
        .then(response => {
            store.dispatch(getBeersSuccess(response.data));
            return response;
        });
}

/**
 * Add beer to Collection
 * @return object
 */
export function addBeerToCollection(){
    store.dispatch(addBeer());
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

export function addNew(beerId, beerName, beerAbv, beerType, beerBrewer, beerCountry){
    console.log('nieuw bier is toegevoegd...' +beerId +beerName, beerAbv, beerType, beerBrewer, beerCountry);

    var beerDetails = {biernaam: beerName, alcohol: beerAbv, biertype: beerType, brouwerij: beerBrewer, land: beerCountry};

    localStorage.setItem(beerId, JSON.stringify(beerDetails));
    return;
}
