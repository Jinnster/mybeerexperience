/**
 * Created by Jinhua on 22-6-2016.
 */

import React from 'react';
import SearchBeerFormContainer from '../containers/search-beer-form-container';

export default function(props) {

    return (
        <div className="search">
                {props.title}
            <SearchBeerFormContainer searchType={props.searchType} />


            <div className="search-results">
                {props.children}
            </div>

            <footer>
                {props.totalResults} Results
            </footer>

        </div>
    );
}