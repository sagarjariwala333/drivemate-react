import React, { useEffect, useState } from "react";
import "./style.css"
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { reversegeoCodeRequest } from "../../../redux/reversegeolocation/actions";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "../../Loading";
import { fetchCurrentLocation } from "../../../redux/currentposition/actions";
import { requestDistance } from "../../../redux/distance/actions";
import { insertTripRequest } from "../../../redux/inserttrip/actions";

function CustomerHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { currentLocation, reverseGeoLocation, distanceReducer, insertTrip } = useSelector(
    (state) => ({
      currentLocation: state.CurrentLocation,
      reverseGeoLocation: state.ReverseGeoLocation,
      distanceReducer: state.Distance,
      insertTrip: state.InsertTrip
    })
  );

  const [address, setAddress] = useState("");

  const [formData, setFormData] = useState({
    source: "source",
    destination: "",
    datetime: "",
    distance:"",
    duration:"",
    amount:""
  });


  const [distanceState, setDistanceState] = useState({
    text: "",
    value: 0,
  });

  const [durationState, setDurationState] = useState({
    text: "",
    value: 0,
  });

  const handleFormChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
  };

  

  async function handleDistanceCall() {
    return new Promise(async (resolve, reject) => {
      try {
        await dispatch(requestDistance(formData));
        resolve("Success");
      } catch (error) {
        reject(error);
      }
    });
  }

  const handleCalculation = async (e) => {
    e.preventDefault();
    dispatch(requestDistance(formData));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    dispatch(insertTripRequest(formData,navigate));
  };

  useEffect(() => {
    dispatch(fetchCurrentLocation());
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      source: reverseGeoLocation?.data?.formatted_address,
    });
  }, [reverseGeoLocation?.data?.formatted_address]);

  useEffect(() => {
    const { distance, duration } = distanceReducer.data;
    setFormData({
      ...formData,
      distance:distance?.text,
      duration:duration?.text,
      amount:Math.abs(Math.ceil(distanceReducer.data?.distance?.value * 0.015)).toString()
    });
    console.log(distance, duration);
  }, [distanceReducer]);

  function getLocationAddress() {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch(
          reversegeoCodeRequest({
            latitude: currentLocation.data.latitude,
            longitude: currentLocation.data.longitude,
          })
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  const getLocation = async (e) => {
    e.preventDefault();

    await getLocationAddress()
      .then((result) => {
        if (reverseGeoLocation && reverseGeoLocation.data.result[0]) {
          setAddress(reverseGeoLocation?.data?.formatted_address || "");
          //setAddress(reverseGeoLocation.data.result[0].formatted_address);
        }
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  };

  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNo: "",
    Password: "",
    Status: false,
    Role: "C",
    AadharNo: "123",
    LicenceNo: "123",
    IsEmailConfirmed: false,
    IsPhoneConfirmed: false,
  });


  const handleSubmit = (e) => {
    console.log("Handle submit");
    dispatch(insertTripRequest(formData,navigate));
    e.preventDefault();
  };


  const handleChangeImage = (e) => {
    setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {currentLocation.loading ||
      reverseGeoLocation.loading ||
      distanceReducer.loading ||
      insertTrip.loading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="p-5 container">
            <div className="row">
              <div className="col-12">
                <div className="cards">
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                <h1 className="h4 mt-3 ">Please Book Trip</h1>

                      <div className="row first-row mt-5">
                        <div className="col-3">
                          <button className="btn purplle-button w-100" onClick={getLocation}>Get Location</button>
                        </div>
                        <div className="col-9">
                          {/*<label htmlFor="source">Source</label>*/}
                          <input
                              disabled="true"
                              type="text"
                              className="form-control"
                              id="source"
                              placeholder="source address"
                          />
                        </div>
                      </div>

                      <div className="row mt-3 ">
                        <div className="col-12">
                          <label htmlFor="destination">Destination</label>
                          <input
                              type="text"
                              name="destination"
                              onChange={handleFormChange}
                              className="form-control"
                              id="destination"
                              placeholder="Enter destination address"
                              value={formData.destination}
                          />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-12">
                          <label htmlFor="datetime">Date and Time</label>
                          <input
                              type="datetime-local"
                              name="datetime"
                              value={formData.datetime}
                              onChange={handleFormChange}
                              className="form-control"
                              id="datetime"
                              placeholder="Select date and time"
                          />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-4">
                          <label htmlFor="distance">Distance</label>
                          <input
                              disabled="true"
                              type="text"
                              name="distance"
                              onChange={handleFormChange}
                              className="form-control"
                              id="distance"
                              placeholder="Distance"
                              value={
                                distanceReducer &&
                                distanceReducer.data &&
                                distanceReducer.data.distance !== undefined
                                    ? distanceReducer.data.distance?.text
                                    : "None"
                              }
                          />
                        </div>

                        <div className="col-4">
                          <label htmlFor="duration">Duration</label>
                          <input
                              disabled="true"
                              type="text"
                              name="duration"
                              onChange={handleFormChange}
                              className="form-control"
                              id="duration"
                              placeholder="Duration"
                              value={
                                distanceReducer &&
                                distanceReducer.data &&
                                distanceReducer.data.duration !== undefined
                                    ? distanceReducer.data.duration?.text
                                    : "None"
                              }
                          />
                        </div>

                        <div className="col-4">
                          <label htmlFor="amount">Amount</label>
                          <input
                              disabled="true"
                              type="text"
                              name="amount"
                              onChange={handleFormChange}
                              className="form-control"
                              id="amount"
                              placeholder="Amount"
                              value={
                                distanceReducer &&
                                distanceReducer.data &&
                                distanceReducer.data.distance !== undefined
                                    ? Math.abs(Math.ceil(distanceReducer.data.distance?.value * 0.015))
                                    : "None"
                              }
                          />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-12">
                          <button className="btn purple-button" onClick={handleCalculation}>
                            Calculate
                          </button>
                        </div>
                      </div>
                      <div className="submit-row row-mt-3">
                        <div className="">
                          <button className="btn purple-button" type="submit">
                            Book
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </>
  );
}

export default CustomerHome;
