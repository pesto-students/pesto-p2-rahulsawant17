export function WeatherComponent({ data }) {
  return (
  <>
    <div className="weather">
      <div className="region">
        {data.location.name} {data.location.region} , {data.location.country}
      </div>
      <div className="datetime">{data.location.localtime}</div>
      <div className="icon">
        <img src={data.current.condition.icon} alt=""></img>
      </div>
      <div className="temp">{data.current.temp_c} ° C</div>
      <div className="condition">{data.current.condition.text}</div>
      </div>
      <div className="days">
        {data.forecast
          ? data.forecast.forecastday.map((ele) => {
              return (
                <div className="day-in">
                  <div className="day-in-comp">Date :{ele.date}</div>
                  <div className="day-in-comp">Max Temp: {ele.day.maxtemp_c} ° C</div>
                  <div className="day-in-comp">Avg Temp: {ele.day.avgtemp_c} ° C</div>
                  <div className="day-in-comp">Min Temp :{ele.day.mintemp_c} ° C</div>
                  <div className="day-in-comp"> {ele.day.condition.text}</div>
                  <div className="day-in-comp"> <img src={ele.day.condition.icon} alt=""></img></div>
                </div>
              );
            })
          : ""}
      </div></>

  );
}
