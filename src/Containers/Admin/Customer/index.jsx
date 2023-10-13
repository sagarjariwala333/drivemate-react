import React, { useEffect, useState } from "react";
import Header from "../../Header";
import './style.css';
import '../styles.css'
import LoadingPage from '../../Loading';
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerRequest } from '../../../redux/viewcustomer/actions';
import { Link } from "react-router-dom";

function Customer() {

  const dispatch = useDispatch();

  const res = useSelector(state => state.ViewCustomer);


  useEffect(() => {
    dispatch(fetchCustomerRequest("C"));
    //setState(res);
  }, [dispatch])


  console.log(res);

  return (
    <>
    {(res?.loading) ? <LoadingPage /> :
      <div className="p-5">
        <div className="table-responsive">
      <table id="Admin" class="table table-hover" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th className="th-sm">Name

            </th>
            <th className="th-sm">Email

            </th>
            <th className="th-sm">Mobile No

            </th>

            <th className="th-sm"> Profile

            </th>

          </tr>
        </thead>
        <tbody>

          {
            res?.data?.map &&
            res?.data?.map(x => (
              <tr>
                <td>{x.firstName +" "+x.lastName}</td>
                <td>{x.email}</td>
                <td>{x.phoneNo}</td>
                <td>
                  <Link className="link-button" to={"/admin/profile/" + x.id}> View </Link>
                </td>
              </tr>
            ))
          }

        </tbody>

      </table>
      </div>
      </div>}
    </>
  )

}

export default Customer;