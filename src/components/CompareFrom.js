import React, { useState } from "react";
import AllCountries from "./AllCountries/AllCountries";  // Menggunakan komponen AllCountries
import CountryInfo from "./CountryInfo/CountryInfo";  // Menggunakan komponen CountryInfo

function CompareFrom() {
  const [selectedCountries, setSelectedCountries] = useState([]);

  // Fungsi untuk menangani pemilihan negara
  const handleCountrySelect = (country) => {
    if (selectedCountries.length < 2) {
      setSelectedCountries((prevSelected) => [...prevSelected, country]);
    }
  };

  // Fungsi untuk menghapus negara yang dipilih
  const clearComparison = () => {
    setSelectedCountries([]);
  };

  return (
    <div>
      <h2>Compare Countries</h2>
      <div className="comparison-section">
        <div className="country-selection">
          <h3>Select Countries to Compare</h3>
          <AllCountries onSelectCountry={handleCountrySelect} /> {/* Menampilkan daftar negara */}
        </div>
        
        {/* Menampilkan hasil perbandingan */}
        <div className="comparison-result">
          {selectedCountries.length === 2 ? (
            <div>
              <h3>Comparison</h3>
              <div className="comparison-countries">
                <div className="country-info">
                  <CountryInfo countryName={selectedCountries[0]} />
                </div>
                <div className="country-info">
                  <CountryInfo countryName={selectedCountries[1]} />
                </div>
              </div>
              <button onClick={clearComparison}>Clear Comparison</button>
            </div>
          ) : (
            <p>Please select two countries to compare.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompareFrom;
