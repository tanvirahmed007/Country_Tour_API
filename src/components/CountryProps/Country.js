import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.countries);

  return (

    <div className="country">
        <div className='showCountryDetails'>
            <h1>This is: {props.name}</h1>
            <h4>Capital: {props.capital}</h4>
            <p>Population: {props.population}</p>
            <img src={props.flag} alt="" />
        </div>
    </div>

  );
};

export default Country;