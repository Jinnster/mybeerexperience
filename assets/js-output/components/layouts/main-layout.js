'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
            'div',
            { className: 'menu' },
            _react2.default.createElement(
                'div',
                { className: 'menu-item' },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/', activeClassName: 'active' },
                    'Home'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'menu-item' },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/beers', activeClassName: 'active' },
                    'Search Beer'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'menu-item' },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/mycollection', activeClassName: 'active' },
                    'My Beer Collection'
                )
            )
        ),
        _react2.default.createElement(
            'main',
            null,
            props.children
        )
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }