/**
 * Created by Jinhua on 22-6-2016.
 */

import React from 'react';
import { Link } from 'react-router';

export default function(props) {
        return (
            <div className="app">
                <div className="menu">
                    <div className="menu-item">
                        <Link to="/" activeClassName="active">Home</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/beers" activeClassName="active">Search Beer</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/mycollection" activeClassName="active">My Beer Collection</Link>
                    </div>
                </div>

                <main>
                    {props.children}
                </main>

            </div>
        );

}
