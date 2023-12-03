import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles.css';
import LoadingPage from "../../Loading";
import {getToken, getToken1} from "../../../services/authservice";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import BasicDocument from "./document";
import { Link } from "react-router-dom";

const AdminHome =  () => {
    const token1 =  getToken1()
    const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsIklkIjoiNmNlNzVlMzUtZmU2MS00NDJjLWMyZDktMDhkYmJiMzEzM2UxIiwiUm9sZSI6IkMiLCJ1bmlxdWVpZCI6IjkxNzYxMGNmLTMzYjAtNGI0My05OTdlLTJiYWFiMmRkNzc4YyIsImV4cCI6MTY5ODIzNjk4MCwiaXNzIjoiKiIsImF1ZCI6IioifQ.OplcthdGHlJnRG-UjeQhGNHqxLO-evG-t4BQqIhLhU8";  
    const config = {
        headers: {
            Authorization: "Bearer " + token1
        }
    };
    const report_url = "https://localhost:7094/api/Admin/GetReport";

    const today = new Date();
    const defaultDate = today.toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(defaultDate);
    const [driversData, setDriversData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    


    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestBody = {
                    date: selectedDate + "T00:00:00.000Z"
                };

                const response = await axios.post(report_url, requestBody, config);
                console.log(response);

                setDriversData(response.data.result);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selectedDate]); //""" Empty dependency array ensures this effect runs only once after the initial render """
    const totalTrips = driversData.reduce((sum, driver) => sum + driver.totalTrips, 0);
    const calculateIncome = (distance) => (distance * 5).toFixed(2);

    const totalIncome = driversData.reduce((sum, driver) => sum + parseFloat(calculateIncome(driver.distance)), 0);

    const redirectstr = "/admin/rederpdf/" + selectedDate + "T00:00:00.000Z"

    return (
        <>

            {isLoading ? (
                <LoadingPage />
            ) : (

                <div className="p-5">
                    <div className="upper-div">
                    <span>Report on :   </span>

                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <span className="summary-text5">Total Income: ₹{totalIncome}</span>
                    </div>

                    <Link to={redirectstr} target="_blank" style={{color:'#ab51e3'}}>Print Report</Link>

                    <div className="table-responsive">
                       
                       {
                        driversData?.length === 0 && 
                        <p>No Trips on this date</p>
                       }

                        {driversData?.length > 0 &&
                        <table id="Admin" className="table table-hover" cellSpacing="0" width="100%">
                            <thead>
                            <tr>
                                <th className="th-sm">Driver's Name</th>
                                <th className="th-sm">Email</th>
                                <th className="th-sm">Distance Travelled</th>
                                <th className="th-sm">Total Fare</th>
                                <th className="th-sm">Driver's earnings</th>
                                <th className="th-sm">Company's share</th>
                            </tr>
                            </thead>
                            <tbody>
                            {driversData.map(driver => (
                                <tr key={driver.id}>
                                    <td>{driver.name}</td>
                                    <td>{driver.email}</td>
                                    <td>{driver.distance} km</td>
                                    <td>{(driver.distance * 15).toFixed(2)} ₹</td>
                                    <td>{(driver.distance * 10).toFixed(2)} ₹</td>
                                    <td>{(driver.distance * 5).toFixed(2)} ₹</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>}
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminHome;