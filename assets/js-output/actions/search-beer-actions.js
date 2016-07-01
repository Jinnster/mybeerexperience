'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSearchLayout = loadSearchLayout;

var _actTypes = require('../actions/act-types');

var types = _interopRequireWildcard(_actTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Load search layout
 * @param {object} searchType
 * @param {string} title
 * @return object
 */
function loadSearchLayout(searchType, title) {
  return {
    type: types.LOAD_SEARCH_LAYOUT,
    searchType: searchType,
    title: title
  };
} /**
   * Created by Jinhua on 27-6-2016.
   */