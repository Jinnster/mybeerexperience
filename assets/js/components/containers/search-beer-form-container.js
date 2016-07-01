/**
 * Created by Jinhua on 28-6-2016.
 */

import React from 'react';
import * as beerApi from '../../api/beer-api';
import { loadSearchLayout } from '../../actions/search-beer-actions';
import SearchBeerForm from '../views/search-beer-form';

const SearchBeerFormContainer = React.createClass({

    search(event) {
        event.preventDefault();

        let query = this.refs.child.getQuery();

        if (this.props.searchType === 'beers') {
            beerApi.searchBeers(query);
        }
    },

    render() {
        return (
            <SearchBeerForm search={this.search} ref="child" />
        );
    }

});

export default SearchBeerFormContainer;