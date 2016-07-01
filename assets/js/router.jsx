/**
 * Created by Jinhua on 22-6-2016.
 */

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container.js';

// Pages
import Home from './components/home';
import BeerListContainer from './components/containers/beer-list-container';
import BeerDetailContainer from './components/containers/beer-detail-container.js';
import MyCollectionContainer from './components/containers/mycollection-container.js';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>

            <Route path="/" component={Home} />

            <Route path="beers">
                <Route component={SearchLayoutContainer}>
                    <IndexRoute component={BeerListContainer} />
                </Route>
                    <Route path=":beerId" component={BeerDetailContainer} />
            </Route>

            <Route path="mycollection">
                    <IndexRoute component={MyCollectionContainer} />
            </Route>

        </Route>
    </Router>
);