import React, { useEffect } from "react";
import Header from "../../Header";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTripsRequest } from "../../../redux/viewtrips/actions";
import LoadingPage from "../../Loading";


function Trips() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTripsRequest());
  }, []);

  const res = useSelector((state) => state.ViewTrip);
  console.log(res);

  const reversedTrips = [...res?.data]?.reverse() || [];

  const getTimeDifference = (date) => {
    const currentDate = new Date();
    const tripDate = new Date(date);
    const timeDifference = currentDate - tripDate;
    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = 60 * millisecondsPerSecond;
    const millisecondsPerHour = 60 * millisecondsPerMinute;
    const millisecondsPerDay = 24 * millisecondsPerHour;
  
    const days = Math.floor(timeDifference / millisecondsPerDay);
    const hours = Math.floor((timeDifference % millisecondsPerDay) / millisecondsPerHour);
  
    if (days > 0 && hours > 0) {
      return `${days} days and ${hours} hours ago`;
    } else if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else {
      return 'Less than an hour ago';
    }
  };
  

  return (
    <div className="trips-container p-5">
      {res?.loading ? (
        <LoadingPage />
      ) : (
        <div className="card-container">
          {reversedTrips.map((x) => (
            <div className="card" key={x.id}>
              <div className="card-body">
                <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front" viewBox="0 0 16 16">
  <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"/>
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"/>
</svg> Trip</h5>
                <p className="card-text">Driver Name: {x.driverName}</p>
                <p className="card-text">Customer Name: {x.customerName}</p>
                <p className="card-text">Source: {x.source}</p>
                <p className="card-text">Destination: {x.destination}</p>
                <p className="card-text">Distance: {x.distance}</p>
                <p className="card-text">Amount:  ₹{x.amount}</p>
                <p className="card-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> Date:{" "}
                  {new Date(x.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{","} {new Date(x.date).toLocaleTimeString("en-US")}
                </p>
                <p className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> {getTimeDifference(x.date)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Trips;
