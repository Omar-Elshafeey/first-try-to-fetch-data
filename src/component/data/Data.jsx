import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));

    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => setUsers(response.data.results));
  }, []);

  return (
    <div className="container mt-4">
      <h1>API data</h1>
      <div className="row">
        {countries.slice(0, 4).map((country) => (
          <div className="col-md-3 mb-4" key={country.name.common}>
            <div className="card">
              <div className="card-header">{country.name.common}</div>
              <div className="card-body">
                <h5 className="card-title">{country.capital[0]}</h5>
                <p className="card-text">{country.region}</p>
              </div>
            </div>
          </div>
        ))}
        {users.slice(0, 10).map((user) => (
          <div className="col-md-3 mb-4" key={user.login.uuid}>
            <div className="card">
              <img src={user.picture.large} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
