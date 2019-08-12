import React from 'react';
import {
  currencyIterator,
  languagesIterator,
} from '../utils/utils';

const CountriesDisplay = ({ countriesData }) => (
  <React.Fragment>
    <h1>COUNTRIES</h1>
    {countriesData.countries.map((country) => (
      <div
        className="country-wrapper"
        key={country.code}
      >
        <div>
          {country.name} {country.emoji}
        </div>
        <div style={{ marginTop: '6px' }}>
          Language(s): {languagesIterator(country.languages)}
        </div>
        <div style={{
          marginTop: '8px',
          marginBottom: '4px'
        }}>
          Currency: {currencyIterator(country.currency)}
        </div>
      </div>
    ))}
  </React.Fragment>
);

export default CountriesDisplay;