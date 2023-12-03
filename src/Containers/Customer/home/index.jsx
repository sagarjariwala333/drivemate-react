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
import axios from 'axios';
import BingMap from "./BingMap";
import { toast } from "react-toastify";

function CustomerHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BING_MAPS_API_KEY = "Aqy1ZGH8w5qxacwXGoWyCJzAdq9RDUlzX8HGBCeXcBIvlGV5JwdzLla1gQPpeYkJ";

  const [isMapVisible, setIsMapVisible] = useState(false);
  const { currentLocation, reverseGeoLocation, distanceReducer, insertTrip } = useSelector(
    (state) => ({
      currentLocation: state.CurrentLocation,
      reverseGeoLocation: state.ReverseGeoLocation,
      distanceReducer: state.Distance,
      insertTrip: state.InsertTrip
    })
  );
  const [sourceCoordinates, setSourceCoordinates] = useState({
    latitude: 22.3115,
    longitude:  73.1900,
  });
  

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
  const [disabled, setdisabled] = useState({
    disabled: true
  });
  const handleCalculation = async (e) => {
    e.preventDefault();
    if(formData.source?.length < 1 || formData.destination?.length < 1){
      toast.warning("Enter appropriate source and destination")
    }
    else if(formData.datetime?.toString().length <1){
      toast.warning("Please Enter Date and Time of Journey")
    }
    else{
    dispatch(requestDistance(formData));
    setdisabled({disabled:false})

    }
  };

  const [destinationCoordinates, setDestinationCoordinates] = useState({
    latitude: null,
    longitude: null,
  });


  // Function to get destination coordinates based on address
  async function getDestinationCoordinates() {
    try {
      const response = await axios.get(
        `https://your-geocoding-api-endpoint?address=${formData.destination}&key=YOUR_API_KEY`
      );

      const { lat, lng } = response.data.results[0].geometry.location;
      setDestinationCoordinates({ latitude: lat, longitude: lng });
      return { lat, lng };
    } catch (error) {
      console.error("Error getting destination coordinates:", error);
      throw error;
    }
  }
console.log(getDestinationCoordinates)
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Get destination coordinates before submitting the form
    try {
      const destinationCoords = await getDestinationCoordinates();
      // Now you can use destinationCoords.latitude and destinationCoords.longitude in your form submission logic

      // Rest of your form submission logic
      console.log("Form submitted", formData);
      dispatch(insertTripRequest(formData, navigate));
    } catch (error) {
      console.error("Error processing form submission:", error);
    }
  };
  

  useEffect(() => {
    dispatch(fetchCurrentLocation());
  }, []);

  useEffect(() => {
    if (reverseGeoLocation?.data?.formatted_address) {
      setFormData(prevState => ({
        ...prevState,
        source: reverseGeoLocation.data.formatted_address
      }));
    }
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

  async function getLocationAddress() {
    try {
      const { latitude, longitude } = currentLocation.data;
      setSourceCoordinates({ latitude, longitude });
      const response = await axios.get(
        `https://dev.virtualearth.net/REST/v1/LocationRecog/${latitude},${longitude}?top=1&key=${BING_MAPS_API_KEY}`
      );
  
      const data = response.data;
      if (data?.resourceSets?.[0]?.resources?.[0]?.businessesAtLocation?.length > 0) {
        const formattedAddress = data.resourceSets[0].resources[0].businessesAtLocation[0].businessAddress.formattedAddress;
        setAddress(formattedAddress);
        setFormData(prevState => ({
          ...prevState,
          source: formattedAddress
        }));
        return formattedAddress;
      } else {
        throw new Error("Address not found");
      }
    } catch (error) {
      throw new Error("Error getting address: " + error.message);
    }
  }
  
  const [locationstate,setlocationstate]  = useState({loading:false})
  const getLocation = async (e) => {
    e.preventDefault();
    setlocationstate({loading:true})
    try {
      const result = await getLocationAddress();
      console.log("Formatted Address:", result);
      setIsMapVisible(true); // Set the flag to make the map visible
    } catch (error) {
      console.error("Error getting address:", error);
    }
    setlocationstate({loading:false})
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
      reverseGeoLocation.loading || locationstate.loading ||
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
                      <div className="row">
                        <div className="col-12 col-md-8">
                      <div className="row first-row mt-5">
                        <div className="col-4">
                        <button className="btn purplle-button" onClick={getLocation}>
          Get Location
        </button>
                        </div>
                        <div className="col-8">
                          {/*<label htmlFor="source">Source</label>*/}
                          <input

                              type="text"
                              className="form-control"
                              id="source"
                              value={locationstate.loading ? "loading": formData?.source}
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
                      </div>
                     
              {isMapVisible &&  <div className="col-3 border border-purple  border-2 rounded"> <BingMap apiKey={BING_MAPS_API_KEY} sourceCoordinates={sourceCoordinates} />
              </div>}
              
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
                          {disabled.disabled ?
                          
                           <button className="btn purple-button" type="submit" disabled> 
                            Book
                          </button> : <button className="btn purple-button" type="submit" > 
                            Book
                          </button>}
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
