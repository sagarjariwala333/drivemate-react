import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  
  import { getToken1 } from "../../../services/authservice";
  
  // Create Document Component
  function BasicDocument(date) {
    const selectedate = date.date.toString().split("/")[5];
  
    const token1 = getToken1();
    const config = {
      headers: {
        Authorization: "Bearer " + token1,
      },
    };
    const report_url = "https://localhost:7094/api/Admin/GetReport";
    const today = new Date();
    const defaultDate = today.toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState(defaultDate);
    const [driversData, setDriversData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const requestBody = {
            date: selectedate
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
    }, [selectedDate]);
  
    const totalTrips = driversData.reduce(
      (sum, driver) => sum + driver.totalTrips,
      0
    );
    const calculateIncome = (distance) => (distance * 5).toFixed(2);
  
    const totalIncome = driversData.reduce(
      (sum, driver) => sum + parseFloat(calculateIncome(driver.distance)),
      0
    );
  
    const redirectstr = "/admin/rederpdf/" + selectedDate + "T00:00:00.000Z";
  
    // Create styles
    const styles = StyleSheet.create({
        page: {
          backgroundColor: "white",
          color: "black",
          fontSize:11
        },
        section: {
          margin: 10,
          padding: 10,
        },
        table: {
          display: "table",
          width: "auto"
        },
        tableRow: {
          margin: "auto",
          flexDirection: "row",
        },
        tableCellHeader: {
          margin: "auto",
          border: "1px solid black",
          padding: 5,
          fontWeight: "bold",
          width: 100
        },
        tableCell: {
          margin: "auto",
          border: "1px solid black",
          padding: 5,
          width: 100
        },
        viewer: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      });
      
      return (
        <PDFViewer style={styles.viewer}>
          <Document>
            <Page size="A4" style={styles.page}>
            <View style={{padding:10, alignItems: 'center'}}>
   <Text style={{ fontSize: 24, fontWeight: 'bold',marginBottom:3}}>Drivemate Daily Report</Text>
  
</View>
<View>
<Text style={{ fontSize: 16 ,padding:10,}}>Summary of activities for {selectedDate}</Text>
</View>
           
              <View style={{
          padding: 6,marginLeft:5,marginBottom:10
        }}>
                <Text>Total Income today: Rs. {totalIncome}</Text>
                <Text>Date:{selectedDate}</Text>
              </View>
              <View style={styles.table}>
                {/* Header Row */}
                <View style={styles.tableRow}>
                  <Text style={styles.tableCellHeader}>Name</Text>
                  <Text style={styles.tableCellHeader}>Distance</Text>
                  <Text style={styles.tableCellHeader}>Total Fare</Text>
                  <Text style={styles.tableCellHeader}>Driver's Earnings</Text>
                  <Text style={styles.tableCellHeader}>Company's Share</Text>
                </View>
      
                {/* Data Rows */}
                {driversData.map((driver) => (
                  <View key={driver.id} style={styles.tableRow}>
                    <Text style={styles.tableCell}>{driver.name}</Text>
                    <Text style={styles.tableCell}>{driver.distance} km</Text>
                    <Text style={styles.tableCell}>
                      {(driver.distance * 15).toFixed(2)} Rs. 
                    </Text>
                    <Text style={styles.tableCell}>
                      {(driver.distance * 10).toFixed(2) } Rs.
                    </Text>
                    <Text style={styles.tableCell}>
                      {(driver.distance * 5).toFixed(2)} Rs.
                    </Text>
                  </View>
                ))}
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end',alignItems:'flex-end'}}>
                  <Text style={{ fontSize: 12, fontStyle: 'italic',padding:5 }}>
                     This report is electronically generated on {new Date().toLocaleString()}
                  </Text>
               </View>
            </Page>
          </Document>
        </PDFViewer>
      );
  }
  
  export default BasicDocument;
  