"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = _react2.default.createClass({
    displayName: "Home",
    render: function render() {
        return _react2.default.createElement(
            "div",
            { className: "home-page" },
            _react2.default.createElement(
                "h1",
                null,
                "Beer experience app"
            ),
            "A beer application to track your beer experience! Add beer to your personal collection and see your beer facts :)."
        );
    }
}); /**
     * Created by Jinhua on 22-6-2016.
     */

exports.default = Home;