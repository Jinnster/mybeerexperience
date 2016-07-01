/**
 * Created by Jinhua on 30-6-2016.
 */

import React from 'react';

class MyBeerFacts extends React.Component{

    render() {

        if(localStorage.length == 0){
            return (
                <div className="factsList">You don't have any experencie, add some beer to your collection!</div>
            );
        }

        else if (localStorage.length < 4) {
            return (
                <div className="factsList">You don't get enough beer for facts... add some more.</div>
            );
        }

        else {
            return (
                <div className="factsList">
                    <h1>My Facts</h1>
                    <li>Most of the beer you drank come from {this.props.country}.</li>
                    <li>You drink a lot of beer that contains{this.props.alcohol}% alcohol.</li>
                    <li>You are a {this.props.typebeer} beer type fan.</li>
                    <li>The total amount of alcohol if you drink each beer in your collection is {this.props.alcoholTotal}%.</li>
                    <li>You love the {this.props.brewer} brewery.</li>
                    <li>You collected {localStorage.length} beers from 480!</li>
                </div>
            );
        }
    }

}

export default MyBeerFacts