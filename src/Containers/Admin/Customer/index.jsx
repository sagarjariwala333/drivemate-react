import React, { useEffect, useState } from "react";
import Header from "../../Header";
import './style.css';
import '../styles.css'
import LoadingPage from '../../Loading';
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerRequest } from '../../../redux/viewcustomer/actions';
import { Link } from "react-router-dom";

function Customer() {
  const [filterQuery, setFilterQuery] = useState("");
  const [queryOn, setQueryOn] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [applyFilters, setApplyFilters] = useState(false);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
  const dispatch = useDispatch();

  const res = useSelector(state => state.ViewCustomer);


  useEffect(() => {
    if (applyFilters) {
      const requestData = {
        role: "C",
        filterQuery: filterQuery,
        queryOn: queryOn,
        sortBy: sortBy,
        isAscending: isAscending,
      };

      dispatch(fetchCustomerRequest(requestData));
      setApplyFilters(false); // Reset applyFilters state after dispatching the action
    }
  }, [dispatch, filterQuery, queryOn, sortBy, isAscending, applyFilters]);

  const handleApplyFilters = () => {
    setApplyFilters(true);
  };
  const handleResetFilters = () => {
    setFilterQuery("");
    setQueryOn("");
    setSortBy("");
    setIsAscending(true);

    handleApplyFilters(); // Calling applyFilters
  };
  console.log(res);


  return (
    <>
    {(res?.loading) ? <LoadingPage /> :
      <div className="p-5">
        {/* Advanced Search Toggle */}
        <div className="form-check form-switch">

          <label className="form-check-label" htmlFor="flexSwitchAdvancedSearch">
            Advanced Search
          </label>
          <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchAdvancedSearch"
              checked={isAdvancedSearch}
              onChange={() => setIsAdvancedSearch(!isAdvancedSearch)}
          />
        </div>

        {isAdvancedSearch && (
        <div className="filtering-div">
          <div className="row">
            <label>Apply Filter: </label>
            <div className="col-6">
          <input
              type="text"
              placeholder="FilterQuery"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
          />
            </div>
            <div className="col-6">
          <select value={queryOn} onChange={(e) => setQueryOn(e.target.value)}>
            <option value="">--FilterOn--</option>
            <option value="firstname">First Name</option>
            <option value="lastname">Last Name</option>
            <option value="email">Email</option>
            <option value="phoneno">Phone Number</option>
          </select>
            </div>
          </div>
          <div className="row">
            <label>Apply Sorting: </label>
          <div className="col-6">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">--SortOn--</option>
            <option value="firstname">First Name</option>
            <option value="lastname">Last Name</option>
          </select>
          </div>
            <div className="col-6">
          <select value={isAscending} onChange={(e) => setIsAscending(e.target.value === "true")}>
            <option value="true">Ascending</option>
            <option value="false">Descending</option>
          </select>
            </div>
          </div>
          <button onClick={handleApplyFilters}>Apply Filter</button>
          <button onClick={handleResetFilters}>Reset Filter</button>

        </div>)}
        <div className="table-responsive">
      <table id="Admin" className="table table-hover" cellspacing="0" width="100%">
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