'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actTypes = require('../actions/act-types');

var types = _interopRequireWildcard(_actTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
    searchType: '',
    title: ''
}; /**
    * Created by Jinhua on 27-6-2016.
    */

var searchBeerReducer = function searchBeerReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];

    switch (action.type) {

        case types.LOAD_SEARCH_LAYOUT:
            return Object.assign({}, state, {
                searchType: action.searchType,
                title: action.title
            });

    }

    return state;
};

exports.default = searchBeerReducer;