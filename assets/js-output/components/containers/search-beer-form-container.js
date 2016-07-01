'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beerApi = require('../../api/beer-api');

var beerApi = _interopRequireWildcard(_beerApi);

var _searchBeerActions = require('../../actions/search-beer-actions');

var _searchBeerForm = require('../views/search-beer-form');

var _searchBeerForm2 = _interopRequireDefault(_searchBeerForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Jinhua on 28-6-2016.
 */

var SearchBeerFormContainer = _react2.default.createClass({
    displayName: 'SearchBeerFormContainer',
    search: function search(event) {
        event.preventDefault();

        var query = this.refs.child.getQuery();

        if (this.props.searchType === 'beers') {
            beerApi.searchBeers(query);
        }
    },
    render: function render() {
        return _react2.default.createElement(_searchBeerForm2.default, { search: this.search, ref: 'child' });
    }
});

exports.default = SearchBeerFormContainer;