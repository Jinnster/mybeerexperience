'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _beerReducer = require('./beer-reducer');

var _beerReducer2 = _interopRequireDefault(_beerReducer);

var _searchBeerReducer = require('./search-beer-reducer');

var _searchBeerReducer2 = _interopRequireDefault(_searchBeerReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine Reducers

// Reducers
var reducers = (0, _redux.combineReducers)({
  beerState: _beerReducer2.default,
  searchBeerState: _searchBeerReducer2.default
}); /**
     * Created by Jinhua on 27-6-2016.
     */

exports.default = reducers;