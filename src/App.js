import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import Home from "./components/Home";
import About from "./components/About";
import CompareCountries from "./components/CompareCountries/CompareCountries";  // Correct import
import './app.css';


function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Country Rankszz</h5>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
          <Route path="/compare" element={<CompareCountries />} /> {/* Add route for compare */}
        </Routes>
      </div>
    </>
  );
}

export default App;
