'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _mainLayout = require('./components/layouts/main-layout');

var _mainLayout2 = _interopRequireDefault(_mainLayout);

var _searchLayoutContainer = require('./components/containers/search-layout-container.js');

var _searchLayoutContainer2 = _interopRequireDefault(_searchLayoutContainer);

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

var _beerListContainer = require('./components/containers/beer-list-container');

var _beerListContainer2 = _interopRequireDefault(_beerListContainer);

var _beerDetailContainer = require('./components/containers/beer-detail-container.js');

var _beerDetailContainer2 = _interopRequireDefault(_beerDetailContainer);

var _mycollectionContainer = require('./components/containers/mycollection-container.js');

var _mycollectionContainer2 = _interopRequireDefault(_mycollectionContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pages

// Layouts
/**
 * Created by Jinhua on 22-6-2016.
 */

exports.default = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { component: _mainLayout2.default },
        _react2.default.createElement(_reactRouter.Route, { path: '/', component: _home2.default }),
        _react2.default.createElement(
            _reactRouter.Route,
            { path: 'beers' },
            _react2.default.createElement(
                _reactRouter.Route,
                { component: _searchLayoutContainer2.default },
                _react2.default.createElement(_reactRouter.IndexRoute, { component: _beerListContainer2.default })
            ),
            _react2.default.createElement(_reactRouter.Route, { path: ':beerId', component: _beerDetailContainer2.default })
        ),
        _react2.default.createElement(
            _reactRouter.Route,
            { path: 'mycollection' },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _mycollectionContainer2.default })
        )
    )
);