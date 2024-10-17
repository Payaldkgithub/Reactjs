import React, { useState } from "react";

function Country() {
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [flag, setFlag] = useState(false);
  const [msg, setmsg] = useState("");
  const [val, setVal] = useState("");
  const arr = [
    {
      country: "India",
      city: ["pune", "Banglore", "Mumbai", "Indore"],
    },
    {
      country: "Denmark",
      city: ["sajkth", "Sikkim", "rube", "hammel"],
    },
    {
      country: "Chaina",
      city: ["Belgim", "Honkong", "Shashai", "Kunbin"],
    },
    {
      country: "Balgium",
      city: ["Brench", "Mechler", "Merner", "Forest"],
    },
  ];

  function handleCountry(e) {
    setCountry(e.target.value);
    setFlag(true);
    let newrr = arr.filter((ele) => {
      if (ele.country === e.target.value) return ele.city;
    });
    console.log(newrr[0].city);
    setCity(newrr[0].city);
  }
  function handleSubmit(e) {
    let msg = `Welcome to ${val},${country}`;
    setmsg(msg);
  }

  return (
    <>
      {console.log(city)}
      <div className="row">
        <div className="col-6 m-auto mt-5">
          <div className="card">
            <div className="card-header">
              <h2>Display Country</h2>
            </div>
            <div className="card-body">
              <select
                className="form-control"
                value={country}
                onChange={handleCountry}
              >
                <option>Select Your Country</option>
                {arr.map((ele) => {
                  return <option>{ele.country}</option>;
                })}
              </select>
              {flag ? (
                <select className="form-control mt-3" onChange={(e) => {
                    setVal(e.target.value);
                  }}>
                  <option>Select your city</option>
                  {city.map((ele) => {
                    return (
                      <>
                        <option
                        >
                          {ele}
                        </option>
                        ;
                      </>
                    );
                  })}
                </select>
              ) : (
                ""
              )}
              <button className="btn btn-dark mt-3" onClick={handleSubmit}>
                Submit
              </button>
              <h1>{msg}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
