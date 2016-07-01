/**
 * Created by Jinhua on 27-6-2016.
 */

import * as types from '../actions/act-types';

const initialState = {
    searchType: '',
    title: ''
};

const searchBeerReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.LOAD_SEARCH_LAYOUT:
            return Object.assign({}, state, {
                searchType: action.searchType,
                title: action.title
            });

    }

    return state;

}

export default searchBeerReducer;