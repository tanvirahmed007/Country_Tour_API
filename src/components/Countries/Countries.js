import React, { useEffect, useState } from 'react';
import Country from '../CountryProps/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

  return (
    <div className='showData'>
        <h1>Total Countries: {countries.length}</h1>
        {
            countries.map(country => <Country 
              name={country.name.common} 
              capital={country.capital} 
              population={country.population}
              flag={country.flags.png}
              ></Country>)
        }
        {
            countries.map(country => <Country
              countries = {country}
              ></Country>)
        }
    </div>
  )
}



export default Countries;