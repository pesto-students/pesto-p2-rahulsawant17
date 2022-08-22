import {  useState } from "react";
import "../index.css";
import { WeatherComponent } from "./WeatherComponent";
import Nav from "./Nav";
export function Search() {
  let [city, setCity] = useState("");
  let [data, setData] = useState();
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(1);

  let changeHandler = (event) => {
    setCity(event.target.value);
  };
  let search = () => {
    let url = `http://127.0.0.1:3001/current?city=${city}&page=${page}&limit=${limit}`;
    console.log(url);
    async function fetchwether() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }

    fetchwether();
  };

  let prev = () => {
    if (page > 1) {
      setPage(page - 1);
    console.log(page)

      search();
    }
  };
  let next = () => {
setPage(page+1)
    console.log(page)
    search();
  };

  return (
    <><Nav/>

      <h1>Weather App</h1>
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
          Page
          <input
            className="num"
            onChange={(e) => setPage(e.target.value)}
            value={page}
            min={1}
            type="number"
          ></input>
        </label>
        <label>
          Limit
          <input
            className="num"
            onChange={(e) => setLimit(e.target.value)}
            value={limit}
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
      <div>
        <button className="btn" onClick={prev}>
          Previous
        </button>
        <button className="btn" onClick={()=>{
          setPage(page + 1);
          next()}}>
          Next
        </button>
      </div>
    </>
  );
}
