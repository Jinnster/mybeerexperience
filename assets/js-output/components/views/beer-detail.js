'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    console.log(props);
    return _react2.default.createElement(
        'div',
        { className: 'user-profile' },
        _react2.default.createElement(
            _reactRouter.Link,
            { to: '/beers/' },
            ' Terug '
        ),
        _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement(
                'h1',
                null,
                props.name
            ),
            _react2.default.createElement(
                'div',
                { className: '' },
                'Alcohol: ',
                props.abv,
                '%'
            ),
            _react2.default.createElement(
                'div',
                { className: '' },
                'Country: ',
                props.country
            ),
            _react2.default.createElement(
                'div',
                { className: '' },
                'Brewer: ',
                props.brewer
            )
        )
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }