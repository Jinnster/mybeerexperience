/**
 * Created by Jinhua on 27-6-2016.
 */

import React from 'react';

export default React.createClass({

    getQuery() {
        return this.refs.search.value;
    },

    render() {

        return (
            <form onSubmit={this.props.search} className="search">
                <input type="text" ref="search" placeholder="zoek op landen" />
                <button className="search-btn">Search my beer!</button>
            </form>
        );
    }

});
