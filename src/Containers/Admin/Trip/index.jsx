import React, { useEffect, useState } from "react";
import Header from "../../Header";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTripsRequest } from "../../../redux/viewtrips/actions";
import { Link } from "react-router-dom";
import { getAllTrips } from "../../../services/dpservices";
import LoadingPage from "../../Loading";

function Trips() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTripsRequest());
  }, []);

  const res = useSelector((state) => state.ViewTrip);
  console.log(res);

  return (
    <>
      {res?.loading ? (
        <LoadingPage/>
      ) : (
        <div className="p-5">
          <div className="card-container">
            {res?.data?.map((x) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <div className="card-body">
                  <p>Driver Name: {x.driverName}</p>
                  <p>Customer Name: {x.customerName}</p>
                  <p>Source: {x.source}</p>
                  <p>Destination: {x.destination}</p>
                  <p>Distance: {x.distance}</p>
                  <p>Amount: {x.amount}</p>
                  <p>
                    Date:{" "}
                    {`${new Date(x.date).getDate()}/${
                      new Date(x.date).getMonth() + 1
                    }/${new Date(x.date).getFullYear()}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Trips;
