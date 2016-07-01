/**
 * Created by Jinhua on 27-6-2016.
 */

import { connect } from 'react-redux';
import React from 'react';
import BeerDetail from '../views/beer-detail.js';
import * as beerApi from '../../api/beer-api.js';


const BeerDetailContainer = React.createClass({

    componentDidMount: function() {
        let beerId = this.props.params.beerId;
        beerApi.getBeerDetail(beerId);

        beerApi.addBeerToCollection();
    },

    render: function() {
        return (
            <BeerDetail {...this.props.detail} hallo={this.props.text} />
        );
    }


});


const mapStateToProps = function(store) {
    return {
        detail: store.beerState.beerDetail,
        text: store.beerState.text
    };
};

export default connect(mapStateToProps)(BeerDetailContainer);
