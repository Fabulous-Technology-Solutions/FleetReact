import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import BarChartBox from "../../../components/dashboard/BarChartBox";
import LineChartBox from "../../../components/dashboard/LineChartBox";
import DoughnutChartBox from "../../../components/dashboard/DoughnutChartBox";
import MapBox from "../../../components/dashboard/MapBox";
import ArrowIcon from "../../../CustomIcons/ArrowIcon";
import TableMui from "../../../components/TableMui";
import { GoDotFill } from "react-icons/go";
import { statusStyles } from "../../../modules/helpers";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Dashboard() {
  const cards = [
    { title: "Active Drivers", value: "80", percentage: "+11.01%" },
    { title: "On-Duty Vehicles", value: "85", percentage: "-0.03%" },
    { title: "Pending Compliance Docs", value: "8", percentage: "+15.03%" },
    { title: "Fleet Health Score", value: "92%" },
  ];

  const data = [
    {
      id: 1,
      start: "Newark",
      end: "Jersey City",
      vehicle: "BUS-204",
      driver: "Kimberly Mastrangelo",
      departure: "May 13, 2025 6:30 pm",
      eta: "May 13, 2025 7:52 pm",
      status: "On Route",
    },
    {
      id: 2,
      start: "Queens",
      end: "Bronx",
      vehicle: "BUS-115",
      driver: "Judith Rodriguez",
      departure: "May 14, 2025 10:44 am",
      eta: "Apr 29, 2025 11:40 pm",
      status: "Delayed",
    },
    {
      id: 3,
      start: "West Loop",
      end: "East Loop (CHI)",
      vehicle: "VAN-104",
      driver: "Alex Buckmaster",
      departure: "May 20, 2025 7:57 am",
      eta: "May 15, 2025 1:03 am",
      status: "Scheduled",
    },
    // ... rest of your data objects
  ];
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 rounded-[16px] bg-cardcontainer flex flex-col justify-between h-full"
          >
            <p className="c-secondary text-sm">{card.title}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              {card.percentage ? (
                <div className="flex items-center gap-2">
                  <p className="text-sm c-secondary">{card.percentage}</p>
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
      <div className="mt-4 bg-sidebar border border-main rounded-[12px] overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">Route Management</p>
          <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
            Add New Route
          </button>
        </div>
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              route: "Route",
              vehicle: "Vehicle",
              driver: "Assigned Driver",
              departure: "Departure Time",
              eta: "ETA",
              status: "Status",
              track: ""
            }}
            td={data}
            btnName="Detail"
            customFields={[
              {
                name: "route",
                data: (value, item) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <p>{item.start}</p>
                    <div style={{ transform: "rotate(180deg)" }}>
                      <ArrowIcon />
                    </div>
                    <p>{item.end}</p>
                  </div>
                ),
              },
              {
                name: "status",
                data: (value) => {
                  const styles = statusStyles[value] || {
                    text: "text-gray-400",
                    bg: "bg-gray-700",
                  };

                  return (
                    <div
                      className={`inline-flex gap-2 items-center rounded-full py-1 px-2 ${styles.text} ${styles.bg}`}
                    >
                      <GoDotFill />
                      {value}
                    </div>
                  );
                },
              },
              {
                name: "track",
                data: (value) => {

                  return (
                    <div
                      className={`inline-flex gap-2 items-center`}
                    >
                      <HiOutlineLocationMarker />
                      Track
                    </div>
                  );
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
