import {  useState } from "react";
import "../index.css";
import { WeatherComponent } from "./WeatherComponent";
import Nav from "./Nav";
export function Forcast() {
  let [city, setCity] = useState("");
  let [data, setData] = useState();
  let [days, setDays] = useState(1);

  let changeHandler = (event) => {
    setCity(event.target.value);
  };
  let search = () => {
    let url = `http://127.0.0.1:3001/forecast?city=${city}&days=${days}`;
    console.log(url);
    async function fetchwether() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data)
    }

    fetchwether();
  };



  return (
    <><Nav/>

      <h1>Weather App Forcast</h1>
      <div className="top">
        <label>
          <input
            placeholder="Search a city"
            onChange={changeHandler}
            type="text"
          ></input>
        </label>
        <button onClick={search}>Search</button>
        <br></br>
        <label>
          Days
          <input
            className="num"
            onChange={(e) => setDays(e.target.value)}
            value={days}
            min={1}
            type="number"
          ></input>
        </label>

      </div>

      <div className="weather-data">
        {data ? (
          <div id="main">
            {data.map((data, index) => {
              return <WeatherComponent data={data} />;
            })}
          </div>
        ) : (
          ""
        )}
      </div>

    </>
  );
}
