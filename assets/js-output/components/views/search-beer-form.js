"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "search-beer-form",
    getQuery: function getQuery() {
        return this.refs.search.value;
    },
    render: function render() {

        return _react2.default.createElement(
            "form",
            { onSubmit: this.props.search, className: "search" },
            _react2.default.createElement("input", { type: "text", ref: "search", placeholder: "zoek op landen" }),
            _react2.default.createElement(
                "button",
                { className: "search-btn" },
                "Search my beer!"
            )
        );
    }
}); /**
     * Created by Jinhua on 27-6-2016.
     */