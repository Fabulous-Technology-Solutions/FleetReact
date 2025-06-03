import React from "react";
import Table from "../../Conponents/Table";
import { ArrowIcon, FiltersIcon } from "../../CustomIcons";

export default function RouteAssignments() {
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
      <div className="bg-sidebar border border-main rounded-[12px]">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">Route Management</p>
          <div className="flex items-center gap-2 ms-auto flex-wrap justify-end">
            <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              <span>Filters</span>
              <FiltersIcon className="text-lg" />
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
              Add New Route
            </button>
          </div>
        </div>
        <div>
          <Table headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
}
