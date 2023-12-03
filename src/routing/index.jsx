import React, { useState } from "react";
import Login from "../Containers/Login";
import Signup from "../Containers/Signup";
import Header from "../Containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "../Containers/Admin/Customer";
import Drivers from "../Containers/Admin/Driver";
import Trips from "../Containers/Admin/Trip";
import UpdateProfile from "../Containers/UpdateProfile";
import CustomerHome from "../Containers/Customer/home";
import DriverHome from "../Containers/Driver/home";
import Profile from "../Containers/profile";
import ViewTrip from "../Containers/viewtrip";
import DriverHeader from "../Containers/Header/driver";
import CustomerHeader from "../Containers/Header/customer";
import AdminHeader from "../Containers/Header/admin";
import LocationButton from "../Containers/Temp";
import LoadingPage from "../Containers/Loading";
import CustomerRouting from "./CustomerRouting";
import AdminHome from "../Containers/Admin/Home";
import DefaultError from "../Containers/Error/Default";
import FindingDrivers from "../Containers/FindingDrivers";
import StartTrip from "../Containers/Driver/starttrip";
import BookedTrips from "../Containers/Customer/bookedtrips";
import RenderPdf from "../Containers/Admin/Home/RederPdf";

const Routing = () => {

  //const [isAuthenticated,setAuthenticated] = useState(false);    

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" Component={Login} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/admin/rederpdf/:date" Component={RenderPdf} />

          <Route path="/customer/"
            element=
            {
              <>
                <CustomerHeader />
                <CustomerHome />
              </>
            } />

          <Route path="/customer/finddrivers"
            element={
              <>
                <CustomerHeader />
                <BookedTrips />
              </>
            }
          />

          <Route path="/customer/viewbookedtrips"
            element={
              <>
                <CustomerHeader />
                <BookedTrips />
              </>
            }
          />

          <Route path="/driver/"
            element={
              <>
                <DriverHeader />
                <DriverHome />
              </>
            } />

          <Route path="/driver/starttrip"
            element={
              <>
                <DriverHeader />
                <StartTrip />
              </>
            } />

          <Route path="/admin/"
            element={
              <>
                <AdminHeader />
                <AdminHome />
              </>
            } />
          <Route path="/error/" Component={DefaultError} />

          <Route
            path="/customer/trips"
            element={
              <>
                <CustomerHeader />
                <Trips />
              </>
            }
          />

<Route
            path="/driver/trips"
            element={
              <>
                <DriverHeader />
                <Trips />
              </>
            }
          />



          <Route
            path="/customer/profile"
            element={
              <>
                <CustomerHeader />
                <Profile />
              </>
            }
          />
          <Route
            path="/driver/profile"
            element={
              <>
                <DriverHeader />
                <Profile />
              </>
            }
          />
          <Route
            path="/customer/update"
            element={
              <>
                <CustomerHeader />
                <UpdateProfile />
              </>
            }
          />
          <Route
            path="/driver/"
            element={
              <>
                <DriverHeader />
                <DriverHome />
              </>
            }
          />
            <Route
                path="/admin/home"
                element={
                    <>
                        <AdminHeader />
                        <AdminHome />
                    </>
                }
            />
          <Route
            path="/admin/customers"
            element={
              <>
                <AdminHeader />
                <Customer />
              </>
            }
          />
          <Route
            path="/admin/drivers"
            element={
              <>
                <AdminHeader />
                <Drivers />
              </>
            }
          />
          <Route
            path="/admin/trips"
            element={
              <>
                <AdminHeader />
                <Trips />
              </>
            }
          />
          <Route
            path="/admin/profile/:id?"
            element={
              <>
                <AdminHeader />
                <Profile />
              </>
            }
          />
          <Route
            path="/admin/driver/profile"
            element={
              <>
                <DriverHeader />
                <Profile />
              </>
            }
          />
          <Route
            path="/admin/trips/trip"
            element={
              <>
                <DriverHeader />
                <Trips />
              </>
            }
          />
          <Route
            path="/customer/update"
            element={
              <>
                <CustomerHeader />
                <UpdateProfile />
              </>
            }
          />
          <Route
            path="/admin/oneuser"
            element={
              <>
                <CustomerHeader />
                <Profile />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing;