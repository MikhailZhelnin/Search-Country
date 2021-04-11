import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Country from './Country/Country';

import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(6);

  const getCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => setCountries(response.data));
    setIsLoading(true);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(value.toLowerCase());
  });

  const showMore = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  return (
    <section className="app__countries">
      <div className="container">
        <div className="app__countries-wrapper">
          <h2 className="app__countries-title">Countries</h2>

          <div className="app__countries-form">
            <form className="form">
              <input
                type="text"
                placeholder="Search country..."
                className="form__input"
                onChange={handleChange}
              />
            </form>
          </div>

          {isLoading ? (
            <div className="app__countries-list">
              {filteredCountries.slice(0, visible).map((country) => (
                <Country key={country.numericCode} {...country} />
              ))}
            </div>
          ) : (
            <div className="app__loading">Loading...</div>
          )}

          {filteredCountries.length > 6 ? (
            <button className="app__countries-btn" onClick={showMore}>
              Show More
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Countries;
