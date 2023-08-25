import React, { useEffect, useState } from "react";
import Header from "../../Header";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchTripsRequest } from '../../../redux/viewtrips/actions';
import { Link } from "react-router-dom";

function Trips() {

  const dispatch = useDispatch();

  const res = useSelector(state => state.ViewTrip);

  useEffect(() => {
    dispatch(fetchTripsRequest());
    //setState(res);
  }, [dispatch])


  console.log(res);

  return (
    <>
      <div className="p-5">
      <table id="Admin" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th className="th-sm">Driver

            </th>
            <th className="th-sm">Customer

            </th>
            <th className="th-sm">Date

            </th>
            <th className="th-sm">Amount
            </th>

            <th className="th-sm"> Action
            </th>

          </tr>
        </thead>
        <tbody>

          {
            res.data?.map(x => (
              <tr>
                <td>{x.Driver}</td>
                <td>{x.Customer}</td>
                <td>{x.Date}</td>
                <td>{x.Amount}</td>
                <td>
                  <Link to="/admin/trips/trip" className="btn btn-primary"> View </Link>
                </td>
              </tr>
            ))
          }

        </tbody>

      </table>
      </div>
    </>
  )

}

export default Trips;