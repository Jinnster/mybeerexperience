/**
 * Created by Jinhua on 22-6-2016.
 */

import React from 'react';
import BeerList from '../views/beer-list.js';
import * as beerApi from '../../api/beer-api.js';
import { connect } from 'react-redux';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-beer-actions';

const BeerListContainer = React.createClass({

    componentDidMount() {

        beerApi.getBeers();
        store.dispatch(loadSearchLayout('beers', 'Search results'));
    },

    addNewBeer(beerId, beerName, beerAbv, beerType, beerBrewer, beerCountry) {
        beerApi.addNew(beerId, beerName, beerAbv, beerType, beerBrewer, beerCountry);

    },

    render() {
        return (
            <BeerList beers={this.props.beers} hallo={"hi!"} nieuwbier={this.addNewBeer} />
        );
    }

});

const mapStateToProps = function(store) {
    return {
       beers: store.beerState.beers
    };
};

export default connect(mapStateToProps)(BeerListContainer);