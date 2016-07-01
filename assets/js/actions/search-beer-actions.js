/**
 * Created by Jinhua on 27-6-2016.
 */

import * as types from '../actions/act-types';

/**
 * Load search layout
 * @param {object} searchType
 * @param {string} title
 * @return object
 */
export function loadSearchLayout(searchType, title) {
    return {
        type: types.LOAD_SEARCH_LAYOUT,
        searchType,
        title
    };
}
