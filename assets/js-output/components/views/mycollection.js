'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {

    console.log(props.data.mydata);

    var bierArray = [];
    var abvArray = [];
    var typeArray = [];
    var brewerArray = [];
    var countryArray = [];

    for (var x = 0, len = props.data.mydata.length; x < len; x++) {

        var key = localStorage.key(x);

        var myObj = JSON.parse(localStorage.getItem(key));

        var beerName = myObj["biernaam"];
        var abv = myObj["alcohol"];
        var beerType = myObj["biertype"];
        var brewer = myObj["brouwerij"];
        var country = myObj["land"];

        bierArray.push(_react2.default.createElement(
            'ul',
            { key: beerName },
            beerName
        ));
        abvArray.push(abv);
        typeArray.push(beerType);
        brewerArray.push(brewer);
        countryArray.push(country);
    }

    function mode(arr) {
        return arr.sort(function (a, b) {
            return arr.filter(function (v) {
                return v === a;
            }).length - arr.filter(function (v) {
                return v === b;
            }).length;
        }).pop();
    }

    var highestOccurrenceBrewer = mode(brewerArray);
    var highestOccurrenceCountry = mode(countryArray);
    var highestOccurrenceType = mode(typeArray);
    var highestOccurrenceAlcohol = mode(abvArray);

    var totalAlcohol = 0;
    for (var i = 0; i < abvArray.length; i++) {
        totalAlcohol += parseFloat(abvArray[i]) << 0;
    }

    console.log(totalAlcohol);

    var items = [];

    for (var i = 0; i < props.data.mydata.length; i++) {
        items.push(_react2.default.createElement(
            'li',
            { className: i, key: i },
            props.data.mydata[i]
        ));
    }

    return _react2.default.createElement(
        'div',
        { className: 'beerCollectionItems' },
        _react2.default.createElement(
            'h1',
            null,
            'Collected Beer'
        ),
        bierArray,
        _react2.default.createElement(_beerfacts2.default, { brewer: highestOccurrenceBrewer, country: highestOccurrenceCountry, typebeer: highestOccurrenceType, alcohol: highestOccurrenceAlcohol, alcoholTotal: totalAlcohol })
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _beerfacts = require('./beerfacts');

var _beerfacts2 = _interopRequireDefault(_beerfacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }