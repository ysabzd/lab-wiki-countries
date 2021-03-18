import React from 'react';
import {Link} from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div className="CountriesList">
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overFlow: 'scroll'}}>
            <div className="list-group">
              <a className="list-group-item list-group-item-action">
                {props.countries.map((country) => {
                    return (
                        <li key={country.cca3}>
                            <Link to={`/countries/${country.cca3}`}>{country.name.official}</Link>
                        </li>
                    );
                })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default CountriesList;
