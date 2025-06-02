import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import BarChartBox from "../../Conponents/Dashboard/BarChartBox";
import LineChartBox from "../../Conponents/Dashboard/LineChartBox";
import DoughnutChartBox from "../../Conponents/Dashboard/DoughnutChartBox";
import MapBox from "../../Conponents/Dashboard/MapBox";
import Table from "../../Conponents/Table";
import ArrowIcon from "../../CustomIcons/ArrowIcon";

export default function Dashboard() {
  const cards = [
    { title: "Active Drivers", value: "80", percentage: "+11.01%" },
    { title: "On-Duty Vehicles", value: "85", percentage: "-0.03%" },
    { title: "Pending Compliance Docs", value: "8", percentage: "+15.03%" },
    { title: "Fleet Health Score", value: "92%" },
  ];

  const headers = [
    "Route",
    "Vehicle",
    "Assigned Driver",
    "Departure Time",
    "ETA",
    "Status",
  ];

  const data = [
    {
      start: "Newark",
      end: "Jersey City",
      vehicle: "BUS-204",
      driver: "Kimberly Mastrangelo",
      departure: "May 13, 2025 6:30 pm",
      eta: "May 13, 2025 7:52 pm",
      status: "On Route",
    },
    {
      start: "Queens",
      end: "Bronx",
      vehicle: "BUS-115",
      driver: "Judith Rodriguez",
      departure: "May 14, 2025 10:44 am",
      eta: "Apr 29, 2025 11:40 pm",
      status: "Delayed",
    },
    {
      start: "West Loop",
      end: "East Loop (CHI)",
      vehicle: "VAN-104",
      driver: "Alex Buckmaster",
      departure: "May 20, 2025 7:57 am",
      eta: "May 15, 2025 1:03 am",
      status: "Scheduled",
    },
    {
      start: "Newark",
      end: "Jersey City",
      vehicle: "BUS-204",
      driver: "Kimberly Mastrangelo",
      departure: "May 13, 2025 6:30 pm",
      eta: "May 13, 2025 7:52 pm",
      status: "On Route",
    },
    {
      start: "Queens",
      end: "Bronx",
      vehicle: "BUS-115",
      driver: "Judith Rodriguez",
      departure: "May 14, 2025 10:44 am",
      eta: "Apr 29, 2025 11:40 pm",
      status: "Delayed",
    },
    {
      start: "West Loop",
      end: "East Loop (CHI)",
      vehicle: "VAN-104",
      driver: "Alex Buckmaster",
      departure: "May 20, 2025 7:57 am",
      eta: "May 15, 2025 1:03 am",
      status: "Scheduled",
    },
    {
      start: "Newark",
      end: "Jersey City",
      vehicle: "BUS-204",
      driver: "Kimberly Mastrangelo",
      departure: "May 13, 2025 6:30 pm",
      eta: "May 13, 2025 7:52 pm",
      status: "On Route",
    },
    {
      start: "Queens",
      end: "Bronx",
      vehicle: "BUS-115",
      driver: "Judith Rodriguez",
      departure: "May 14, 2025 10:44 am",
      eta: "Apr 29, 2025 11:40 pm",
      status: "Delayed",
    },
    {
      start: "West Loop",
      end: "East Loop (CHI)",
      vehicle: "VAN-104",
      driver: "Alex Buckmaster",
      departure: "May 20, 2025 7:57 am",
      eta: "May 15, 2025 1:03 am",
      status: "Scheduled",
    },
    {
      start: "Newark",
      end: "Jersey City",
      vehicle: "BUS-204",
      driver: "Kimberly Mastrangelo",
      departure: "May 13, 2025 6:30 pm",
      eta: "May 13, 2025 7:52 pm",
      status: "On Route",
    },
    {
      start: "Queens",
      end: "Bronx",
      vehicle: "BUS-115",
      driver: "Judith Rodriguez",
      departure: "May 14, 2025 10:44 am",
      eta: "Apr 29, 2025 11:40 pm",
      status: "Delayed",
    },
    {
      start: "West Loop",
      end: "East Loop (CHI)",
      vehicle: "VAN-104",
      driver: "Alex Buckmaster",
      departure: "May 20, 2025 7:57 am",
      eta: "May 15, 2025 1:03 am",
      status: "Scheduled",
    },
    {
      start: "Newark",
      end: "Jersey City",
      vehicle: "BUS-204",
      driver: "Kimberly Mastrangelo",
      departure: "May 13, 2025 6:30 pm",
      eta: "May 13, 2025 7:52 pm",
      status: "On Route",
    },
    {
      start: "Queens",
      end: "Bronx",
      vehicle: "BUS-115",
      driver: "Judith Rodriguez",
      departure: "May 14, 2025 10:44 am",
      eta: "Apr 29, 2025 11:40 pm",
      status: "Delayed",
    },
    {
      start: "West Loop",
      end: "East Loop (CHI)",
      vehicle: "VAN-104",
      driver: "Alex Buckmaster",
      departure: "May 20, 2025 7:57 am",
      eta: "May 15, 2025 1:03 am",
      status: "Scheduled",
    },
  ];

  const rows = data.map((item) => {
    const status =
      item.status.toLowerCase() === "on route"
        ? "1"
        : item.status.toLowerCase() === "delayed"
        ? "2"
        : "3";
    return [
      <div className="flex items-center gap-2">
        <p>{item.start}</p>
        <div className="transform rotate-180">
          <ArrowIcon />
        </div>
        <p>{item.end}</p>
      </div>,
      item.vehicle,
      item.driver,
      item.departure,
      item.eta,
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          status === "1"
            ? "bg-[var(--bgsuccess)]"
            : status === "2"
            ? "bg-[var(--bgwarning)]"
            : "bg-[var(--bgatblue)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            status === "1"
              ? "bg-[var(--csuccess)]"
              : status === "2"
              ? "bg-[var(--cwarning)]"
              : "bg-[var(--catblue)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            status === "1"
              ? "text-[var(--csuccess)]"
              : status === "2"
              ? "text-[var(--cwarning)]"
              : "text-[var(--catblue)]"
          }`}
        >
          {item.status}
        </p>
      </div>,
    ];
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-main p-4 rounded-[16px] bg-sidebar flex flex-col justify-between h-full"
          >
            <p className="c-secondary text-sm">{card.title}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              {card.percentage ? (
                <div className="flex items-center gap-2">
                  <p className="text-sm c-secondary">+11.01%</p>
                  <FaArrowTrendUp className="c-secondary" />
                </div>
              ) : (
                <div className="size-3 rounded-full bg-[var(--catblue)]"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <BarChartBox />
        </div>
        <div>
          <LineChartBox />
        </div>
        <div>
          <DoughnutChartBox />
        </div>
        <div>
          <MapBox />
        </div>
      </div>
      <div className="mt-4 bg-sidebar border border-main rounded-[12px]">
        <div className="flex items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">Route Management</p>
          <button className="text-sm font-semibold bg-navlink c-inverted py-3 px-4 rounded-[12px]">
            Add New Route
          </button>
        </div>
        <div>
          <Table headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
}
