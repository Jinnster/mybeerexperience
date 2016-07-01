'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Jinhua on 27-6-2016.
                                                                                                                                                                                                                                                                   */

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beerDetail = require('../views/beer-detail.js');

var _beerDetail2 = _interopRequireDefault(_beerDetail);

var _beerApi = require('../../api/beer-api.js');

var beerApi = _interopRequireWildcard(_beerApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BeerDetailContainer = _react2.default.createClass({
    displayName: 'BeerDetailContainer',

    componentDidMount: function componentDidMount() {
        var beerId = this.props.params.beerId;
        beerApi.getBeerDetail(beerId);

        beerApi.addBeerToCollection();
    },

    render: function render() {
        return _react2.default.createElement(_beerDetail2.default, _extends({}, this.props.detail, { hallo: this.props.text }));
    }

});

var mapStateToProps = function mapStateToProps(store) {
    return {
        detail: store.beerState.beerDetail,
        text: store.beerState.text
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BeerDetailContainer);