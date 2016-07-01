/**
 * Created by Jinhua on 28-6-2016.
 */

import { connect } from 'react-redux';
import React from 'react';
import MyCollection from '../views/mycollection.js';
import * as beerApi from '../../api/beer-api.js';


const MyCollectionContainer = React.createClass({

    componentDidMount() {
        beerApi.addBeerToCollection();
    },

    getBeer() {
        var archive = [];
        for (var i = 0; i<localStorage.length; i++) {
            archive[i] = localStorage.getItem(localStorage.key(i));
        }
        return {
            mydata: archive
        }
    },

    render() {
        return (
            <MyCollection hallo={this.props.text} data={this.getBeer()}/>
        );
    }


});


const mapStateToProps = function(store) {
    return {
        text: store.beerState.text
    };
};

export default connect(mapStateToProps)(MyCollectionContainer);
