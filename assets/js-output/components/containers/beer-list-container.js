'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beerList = require('../views/beer-list.js');

var _beerList2 = _interopRequireDefault(_beerList);

var _beerApi = require('../../api/beer-api.js');

var beerApi = _interopRequireWildcard(_beerApi);

var _reactRedux = require('react-redux');

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _searchBeerActions = require('../../actions/search-beer-actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Jinhua on 22-6-2016.
 */

var BeerListContainer = _react2.default.createClass({
    displayName: 'BeerListContainer',
    componentDidMount: function componentDidMount() {

        beerApi.getBeers();
        _store2.default.dispatch((0, _searchBeerActions.loadSearchLayout)('beers', 'Search results'));
    },
    addNewBeer: function addNewBeer(beerId, beerName, beerAbv, beerType, beerBrewer, beerCountry) {
        beerApi.addNew(beerId, beerName, beerAbv, beerType, beerBrewer, beerCountry);
    },
    render: function render() {
        return _react2.default.createElement(_beerList2.default, { beers: this.props.beers, hallo: "hi!", nieuwbier: this.addNewBeer });
    }
});

var mapStateToProps = function mapStateToProps(store) {
    return {
        beers: store.beerState.beers
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BeerListContainer);