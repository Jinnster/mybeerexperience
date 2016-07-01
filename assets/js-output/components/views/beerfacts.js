"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Jinhua on 30-6-2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MyBeerFacts = (function (_React$Component) {
    _inherits(MyBeerFacts, _React$Component);

    function MyBeerFacts() {
        _classCallCheck(this, MyBeerFacts);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MyBeerFacts).apply(this, arguments));
    }

    _createClass(MyBeerFacts, [{
        key: "render",
        value: function render() {

            if (localStorage.length == 0) {
                return _react2.default.createElement(
                    "div",
                    { className: "factsList" },
                    "You don't have any experencie, add some beer to your collection!"
                );
            } else if (localStorage.length < 4) {
                return _react2.default.createElement(
                    "div",
                    { className: "factsList" },
                    "You don't get enough beer for facts... add some more."
                );
            } else {
                return _react2.default.createElement(
                    "div",
                    { className: "factsList" },
                    _react2.default.createElement(
                        "h1",
                        null,
                        "My Facts"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Most of the beer you drank come from ",
                        this.props.country,
                        "."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "You drink a lot of beer that contains",
                        this.props.alcohol,
                        "% alcohol."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "You are a ",
                        this.props.typebeer,
                        " beer type fan."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "The total amount of alcohol if you drink each beer in your collection is ",
                        this.props.alcoholTotal,
                        "%."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "You love the ",
                        this.props.brewer,
                        " brewery."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "You collected ",
                        localStorage.length,
                        " beers from 480!"
                    )
                );
            }
        }
    }]);

    return MyBeerFacts;
})(_react2.default.Component);

exports.default = MyBeerFacts;