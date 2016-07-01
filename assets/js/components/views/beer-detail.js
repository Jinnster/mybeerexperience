/**
 * Created by Jinhua on 22-6-2016.
 */

import React from 'react';
import { Link } from 'react-router';

export default function(props) {
    console.log(props)
    return (

        <div className="user-profile">
            <Link to={'/beers/'}> Terug </Link>
            <div className="details">
                <h1>{props.name}</h1>
                <div className="">
                    Alcohol: {props.abv}%
                    </div>
                <div className="">
                    Country: {props.country}
                    </div>
                <div className="">
                    Brewer: {props.brewer}
                </div>
            </div>
        </div>
    );
}