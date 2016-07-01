'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        { className: 'data-list' },
        props.beers.map(function (beer) {

            return _react2.default.createElement(
                'div',
                { key: beer.beer_id, className: 'data-list-item' },
                _react2.default.createElement(
                    'div',
                    { className: 'details' },
                    _react2.default.createElement('img', { src: beer.image_url, className: 'beerPic' }),
                    _react2.default.createElement('div', null),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/beers/' + beer.beer_id, className: '' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            beer.name
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'addtocollection', onClick: props.nieuwbier.bind(null, beer.beer_id, beer.name, beer.abv, beer.type, beer.brewer, beer.country) },
                        'Add to collection'
                    )
                )
            );
        })
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }