'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mycollection = require('../views/mycollection.js');

var _mycollection2 = _interopRequireDefault(_mycollection);

var _beerApi = require('../../api/beer-api.js');

var beerApi = _interopRequireWildcard(_beerApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Jinhua on 28-6-2016.
 */

var MyCollectionContainer = _react2.default.createClass({
    displayName: 'MyCollectionContainer',
    componentDidMount: function componentDidMount() {
        beerApi.addBeerToCollection();
    },
    getBeer: function getBeer() {
        var archive = [];
        for (var i = 0; i < localStorage.length; i++) {
            archive[i] = localStorage.getItem(localStorage.key(i));
        }
        return {
            mydata: archive
        };
    },
    render: function render() {
        return _react2.default.createElement(_mycollection2.default, { hallo: this.props.text, data: this.getBeer() });
    }
});

var mapStateToProps = function mapStateToProps(store) {
    return {
        text: store.beerState.text
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MyCollectionContainer);