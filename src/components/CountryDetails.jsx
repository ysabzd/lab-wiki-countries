import React from 'react';
import jsonFile from './../countries.json';

const CountryDetails = (props) => {
    

    const CountryId = props.match.params.uid;
    // console.log(CountryId);
    const findCountry = jsonFile.find((country) => country.cca3 === CountryId);
    console.log(findCountry);

    return (
        <div className="CountryDetails"> 
        
        <h1>{findCountry.name.official}</h1>   
        <h3>Capital: {findCountry.capital}</h3>
        <h3>Area: {findCountry.area} km2</h3>
        <h3>Border: {findCountry.border}</h3>
    </div>
    )


    

}

export default CountryDetails;