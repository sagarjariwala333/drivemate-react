import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles.css';
import LoadingPage from "../../Loading";

const AdminHome = () => {
    const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InZpcmFqamFiZWxpeWExMjNAZ21haWwuY29tIiwiSWQiOiJkZWFlNjk5ZC0zYzNhLTQxOWYtYzJkMy0wOGRiYmIzMTMzZTEiLCJSb2xlIjoiQyIsInVuaXF1ZWlkIjoiMDA0YjY2NDMtYTYwMS00ZTgzLTg0NGMtOGQ0ZmVhZGVjMGMyIiwiZXhwIjoxNjk4MDQ2MTM0LCJpc3MiOiIqIiwiYXVkIjoiKiJ9.xQjiDutigm3NJq7zsrVT2WG7h3MAui5sA8uI9jVsX7Q";
    const config = {
        headers: {
            Authorization: "Bearer " + token
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

    return (
        <>

            {isLoading ? (
                <LoadingPage />
            ) : (
                <div className="p-5">
                    <span>Report on :   </span>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <div className="table-responsive">
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
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminHome;