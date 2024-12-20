import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CompareCountries = () => {
  const [country1, setCountry1] = useState(null);
  const [country2, setCountry2] = useState(null);

  // You can replace these with dynamic values or state inputs
  const country1Name = "South korea";  // Example
  const country2Name = "China";  // Example

  useEffect(() => {
    const fetchCountryData = async (countryName, setCountry) => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (!res.ok) throw new Error("Country not found");
        const data = await res.json();
        setCountry(data[0]); // Set the first country data
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData(country1Name, setCountry1);
    fetchCountryData(country2Name, setCountry2);
  }, []);

  return (
    <div className="compare__countries__wrapper">
      <h2>Compare Countries</h2>

      {country1 && country2 ? (
        <div className="compare__container">
          <div className="country__comparison">
            {/* Country 1 */}
            <div className="country__info-left">
              <h3>{country1.name.common}</h3>
              <img src={country1.flags.png} alt={country1.name.common} />
              <p>Population: {new Intl.NumberFormat().format(country1.population)}</p>
              <p>Region: {country1.region}</p>
              <p>Capital: {country1.capital}</p>
            </div>

            {/* Country 2 */}
            <div className="country__info-left">
              <h3>{country2.name.common}</h3>
              <img src={country2.flags.png} alt={country2.name.common} />
              <p>Population: {new Intl.NumberFormat().format(country2.population)}</p>
              <p>Region: {country2.region}</p>
              <p>Capital: {country2.capital}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading countries...</p>
      )}

      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default CompareCountries;
