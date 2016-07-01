'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {

    return _react2.default.createElement(
        'div',
        { className: 'search' },
        props.title,
        _react2.default.createElement(_searchBeerFormContainer2.default, { searchType: props.searchType }),
        _react2.default.createElement(
            'div',
            { className: 'search-results' },
            props.children
        ),
        _react2.default.createElement(
            'footer',
            null,
            props.totalResults,
            ' Results'
        )
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _searchBeerFormContainer = require('../containers/search-beer-form-container');

var _searchBeerFormContainer2 = _interopRequireDefault(_searchBeerFormContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }