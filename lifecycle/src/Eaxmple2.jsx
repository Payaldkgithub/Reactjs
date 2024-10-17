import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const data = [
  {
    name: "INDIA",
    cities: ["Ahemdabad", "Mumbai", "Bengaluru", "Vadodra"],
  },
  {
    name: "USA",
    cities: ["Texas", "NewYork", "California", "Miami"],
  },
  {
    name: "UK",
    cities: ["London", "Lords", "Oval", "Berminghm"],
  },
  {
    name: "China",
    cities: ["Beijing", "Wuhan", "Honkkong", "Sanghai"],
  },
];

function Eaxmple2() {
  const [country, setCountry] = useState("");
  const [cities, setCities] = useState("");
  const [city, setCity] = useState("");
  useEffect(() => {
    if (country) {
      let countryData = data.find((ele) => ele.name === country);
      setCities(countryData.cities);
      setCity("");
    } else {
      setCities([]);
      setCity("");
    }
  });
  return (
    <>
      <div>
        <label htmlFor="country">Select Country</label>
        <select
          name="country"
          id="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        >
          <option value="">Select Your Country...</option>

          {data.map((e) => {
            return <option value={e.name}>{e.name}</option>;
          })}
        </select>
      </div>
      <div>
        {country && (
          <div>
            <label>Select Your City:</label>
            <select name="city" onChange={(e) => setCity(e.target.value)}>
              <option>Select Your City...</option>
              {cities.map((ele) => {
                return <option value={ele}>{ele}</option>;
              })}
            </select>
          </div>
        )}
      </div>
      {country && city && (
        <div>
          <h1>
            Welcome to {city},{country}
          </h1>
        </div>
      )}
    </>
  );
}

export default Eaxmple2;
