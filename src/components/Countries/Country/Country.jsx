import React from 'react';

import './Country.css';

const Country = ({ name, capital, area, flag, population, region }) => {
  return (
    <article className="app__country">
      <header className="app__country-logo">
        <img src={flag} alt={name} />
      </header>
      <main className="app-country-name">
        <h3>{name}</h3>
      </main>
      <footer className="app__country-info">
        <span>Population: {population}</span>
        <span>Region: {region}</span>
        <span>Capital: {capital}</span>
        <span>Area: {area}</span>
      </footer>
    </article>
  );
};

export default Country;
