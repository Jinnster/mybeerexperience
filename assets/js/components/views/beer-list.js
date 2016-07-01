/**
 * Created by Jinhua on 22-6-2016.
 */

import React from 'react';
import { Link } from 'react-router';


export default function(props) {
        return (
            <div className="data-list">
            {props.beers.map(beer => {


                return (
                    <div key={beer.beer_id} className="data-list-item">
                        <div className="details">
                            <img src={beer.image_url} className="beerPic"></img>
                            <div>
                                </div>
                            <Link to={'/beers/' + beer.beer_id} className=""><h2>{beer.name}</h2></Link>
                            <button className="addtocollection" onClick={props.nieuwbier.bind(null, beer.beer_id, beer.name, beer.abv, beer.type, beer.brewer, beer.country)}>Add to collection</button>
                        </div>
                    </div>
                );
            })}

            </div>
        )

}

