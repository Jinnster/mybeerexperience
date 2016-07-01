/**
 * Created by Jinhua on 28-6-2016.
 */

import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/search-layout';

const mapStateToProps = function(store) {

    let searchType = store.searchBeerState.searchType;
    let totalResults = 0;

    if (searchType === 'beers') {
        totalResults = store.beerState.beers.length;
    }

    return {
        searchType,
        title: store.searchBeerState.title,
        totalResults
    };
};

export default connect(mapStateToProps)(SearchLayout);