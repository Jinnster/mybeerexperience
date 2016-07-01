'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actTypes = require('../actions/act-types');

var types = _interopRequireWildcard(_actTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by Jinhua on 27-6-2016.
 */

var initialState = {
    beers: [],
    beerDetail: {},
    text: ''
};

var beerReducer = function beerReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];

    switch (action.type) {

        case types.GET_BEERS_SUCCESS:
            return Object.assign({}, state, {
                beers: action.beers
            });

        case types.BEER_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                beerDetail: action.beerDetail
            });

        //case types.ADD_BEER:
        //    return Object.assign({}, state, {
        //
        //    });

    }

    return state;
};

exports.default = beerReducer;