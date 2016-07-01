/**
 * Created by Jinhua on 22-6-2016.
 */

import React from 'react';
import { Link } from 'react-router';
import MyBeerFacts from './beerfacts';

export default function(props) {

    console.log(props.data.mydata);

    var bierArray = [];
    var abvArray = [];
    var typeArray = [];
    var brewerArray = [];
    var countryArray = [];

    for (var x =0, len=props.data.mydata.length; x<len; x++){

        var key = localStorage.key(x);

        var myObj = JSON.parse(localStorage.getItem(key));

        var beerName = myObj["biernaam"];
        var abv = myObj["alcohol"];
        var beerType = myObj["biertype"];
        var brewer = myObj["brouwerij"];
        var country = myObj["land"];

        bierArray.push(<ul key={beerName}>{beerName}</ul>);
        abvArray.push(abv);
        typeArray.push(beerType);
        brewerArray.push(brewer);
        countryArray.push(country);
    }

    function mode(arr){
        return arr.sort((a,b) =>
            arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }

    var highestOccurrenceBrewer = mode(brewerArray);
    var highestOccurrenceCountry = mode(countryArray);
    var highestOccurrenceType = mode(typeArray);
    var highestOccurrenceAlcohol = mode(abvArray);


    var totalAlcohol = 0;
    for (var i = 0; i < abvArray.length; i++) {
        totalAlcohol += parseFloat(abvArray[i]) << 0;
    }

    console.log(totalAlcohol);

    var items = [];

    for (var i = 0; i < props.data.mydata.length; i++) {
        items.push(<li className={i} key={i}>{props.data.mydata[i]}</li>);
    }

    return (
        <div className="beerCollectionItems">
            <h1>Collected Beer</h1>
            {bierArray}
                <MyBeerFacts brewer={highestOccurrenceBrewer} country={highestOccurrenceCountry} typebeer={highestOccurrenceType} alcohol={highestOccurrenceAlcohol} alcoholTotal={totalAlcohol}></MyBeerFacts>

        </div>
    )

}
