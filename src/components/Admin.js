import React, { useEffect, useState } from "react";
import "./Admin.css";
import AdminNavbar from "./AdminNavbar";
import AdminIcons from "./AdminIcons";
import { Space, Table, Tag } from "antd";

import tripServices from "../services/tripServices";
import accommodationServices from "../services/accommodationServices";
import flightsServices from "../services/flightsServices";
import userServices from "../services/userServices";


export default function AdminPage() {
  const [selectedFilter, setSelectedFilter] = useState(1);

  const [tripsData, setTripsData] = useState([]);
  const [flightsData, setFlightsData] = useState([]);
  const [staysData, setStaysData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [userData, setUserData] = useState([]);

  const baseUrl = "http://localhost:3001";

  useEffect(() => {
    tripServices.getTrips().then((res) => {
      console.log(res.data);
      setTripsData(res.data);
    });
  }, [2000]);

  useEffect(() => {
    accommodationServices.getStays().then((res) => {
      console.log(res.data);
      setStaysData(res.data);
    });
  }, [2000]);

  useEffect(() => {
    flightsServices.getFlights().then((res) => {
      console.log(res.data);
      setFlightsData(res.data);
    });
  }, [2000]);

  useEffect(() => {
    userServices.getAllUser().then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  }, [2000]);

  const trips = [
    {
      title: "S.N",
      dataIndex: "",
      key: "S.N",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Image",
      dataIndex: "img",

      render: (img) => (
        <img
          src={baseUrl + "/" + img[0]}
          alt="Image"
          style={{ borderRadius: "8px", width: "70px", height: "50px" }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Origin",
      dataIndex: "origin",
      key: "origin",
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "end",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const stays = [
    {
      title: "S.N",
      dataIndex: "",
      key: "S.N",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Image",
      dataIndex: "img",

      render: (img) => (
        <img
          src={baseUrl + "/" + img[0]}
          alt="Image"
          style={{ borderRadius: "8px", width: "70px", height: "50px" }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },

    {
      title: "Check in",
      dataIndex: "checkInDate",
      key: "checkInDate",
    },
    {
      title: "Check Out",
      dataIndex: "checkOutDate",
      key: "checkOutDate",
    },
    {
      title: "Number of guests",
      dataIndex: "numberOfGuests",
      key: "numberOfGuests",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const flights = [
    {
      title: "S.N",
      dataIndex: "",
      key: "S.N",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Origin",
      dataIndex: "origin",
      key: "origin",
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },

    {
      title: "Airline",
      dataIndex: "airline",
      key: "airline",
    },

    {
      title: "Departure",
      dataIndex: "departure_date",
      key: "departure",
    },
    {
      title: "Arrival",
      dataIndex: "arrival_date",
      key: "arrival",
    },
    {
      title: "Flight Duration",
      dataIndex: "flightDuration",
      key: "duration",
    },
    {
      title: "Baggage Limit",
      dataIndex: "baggage_limit",
      key: "duration",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const users = [
    {
      title: "S.N",
      dataIndex: "",
      key: "S.N",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Phone Number",
      dataIndex: "contact",
      key: "Contact",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    
   
    
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <AdminNavbar />
      <AdminIcons
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <div className="admin-main-div">
        <div className="admin-back">
          <div className="">
            {selectedFilter === 1 && (
              <>
                <Table columns={trips} dataSource={tripsData} />;
              </>
            )}

            {selectedFilter === 2 && (
              <>
                <Table columns={flights}  dataSource={flightsData}/>;
              </>
            )}

            {selectedFilter === 3 && (
              <>
                <Table columns={stays} dataSource={staysData} />;
              </>
            )}

            {selectedFilter === 4 && (
              <>
               
              </>
            )}
            
            {selectedFilter === 5 && (
              <>
               <>
                <Table columns={users} dataSource={userData} />;
              </>
               
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
