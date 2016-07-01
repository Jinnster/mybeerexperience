'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _searchLayout = require('../layouts/search-layout');

var _searchLayout2 = _interopRequireDefault(_searchLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(store) {

    var searchType = store.searchBeerState.searchType;
    var totalResults = 0;

    if (searchType === 'beers') {
        totalResults = store.beerState.beers.length;
    }

    return {
        searchType: searchType,
        title: store.searchBeerState.title,
        totalResults: totalResults
    };
}; /**
    * Created by Jinhua on 28-6-2016.
    */

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_searchLayout2.default);