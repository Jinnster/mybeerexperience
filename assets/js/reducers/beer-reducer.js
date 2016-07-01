/**
 * Created by Jinhua on 27-6-2016.
 */

import * as types from '../actions/act-types';
import _ from 'lodash';

const initialState = {
    beers: [],
    beerDetail: {},
    text: ''
};

const beerReducer = function(state = initialState, action) {
    switch(action.type) {

        case types.GET_BEERS_SUCCESS:
            return Object.assign({}, state, {
                beers: action.beers
            });

        case types.BEER_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                beerDetail: action.beerDetail
            });

        //case types.ADD_BEER:
        //    return Object.assign({}, state, {
        //
        //    });

    }

    return state;

}

export default beerReducer;