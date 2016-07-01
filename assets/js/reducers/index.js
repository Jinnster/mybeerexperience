/**
 * Created by Jinhua on 27-6-2016.
 */

import { combineReducers } from 'redux';

// Reducers
import beerReducer from './beer-reducer';
import searchBeerReducer from './search-beer-reducer';

// Combine Reducers
var reducers = combineReducers({
    beerState: beerReducer,
    searchBeerState: searchBeerReducer
});

export default reducers;
