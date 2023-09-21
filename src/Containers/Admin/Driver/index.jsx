import React, { useEffect, useState } from "react";
import Header from "../../Header";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerRequest } from '../../../redux/viewcustomer/actions';
import { Link } from "react-router-dom";

function Drivers() {

  const dispatch = useDispatch();

  const res = useSelector(state => state.ViewCustomer);

  console.log(res)

  useEffect(() => {
    dispatch(fetchCustomerRequest("D"));
    //setState(res);
  }, [dispatch])


  console.log(res);

  return (
    <>
    {(res?.loading) ? <>Loading...</> :
      <div className="p-5">
      <table id="Admin" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th className="th-sm">Name

            </th>
            <th className="th-sm">Email

            </th>
            <th className="th-sm">Mobile_No

            </th>

            <th className="th-sm"> Action

            </th>

          </tr>
        </thead>
        <tbody>

          {
            res?.data?.map(x => (
              <tr>
                <td>{x.firstName +" "+x.lastName}</td>
                <td>{x.email}</td>
                <td>{x.phoneNo}</td>
                <td>
                  <Link className="btn btn-primary" to={"/admin/profile/" + x.id}> View </Link>
                </td>
              </tr>
            ))
          }

        </tbody>

      </table>
      </div>}
    </>
  )

}

export default Drivers;