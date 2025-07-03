import React from "react";
import { FiltersIcon } from "../../../CustomIcons";
import { statusStyles } from "../../../modules/helpers";
import { GoDotFill } from "react-icons/go";
import TableMui from "../../../components/TableMui";

export default function RouteAssignments() {
  const data = [
    {
      id: 1,
      route: "Newark → Jersey City",
      vehicle: "BUS-204",
      driver: "Kimberly Mastrangelo",
      departure: "May 13, 2025 6:30 pm",
      eta: "May 13, 2025 7:52 pm",
      status: "On Route",
    },
    {
      id: 2,
      route: "Queens → Bronx",
      vehicle: "BUS-115",
      driver: "Judith Rodriguez",
      departure: "May 14, 2025 10:44 am",
      eta: "Apr 29, 2025 11:40 pm",
      status: "Delayed",
    },
    {
      id: 3,
      route: "LA Downtown → LA Central",
      vehicle: "VAN-013",
      driver: "Jerry Helfer",
      departure: "May 10, 2025 11:18 pm",
      eta: "May 3, 2025 8:28 am",
      status: "On Route",
    },
    {
      id: 4,
      route: "Brooklyn → Manhattan",
      vehicle: "BUS-302",
      driver: "Daniel Hamilton",
      departure: "Apr 22, 2025 5:03 am",
      eta: "Apr 22, 2025 2:12 pm",
      status: "Delayed",
    },
    {
      id: 5,
      route: "West Loop → East Loop (CHI)",
      vehicle: "VAN-104",
      driver: "Alex Buckmaster",
      departure: "May 20, 2025 7:57 am",
      eta: "May 15, 2025 1:03 am",
      status: "Scheduled",
    },
    {
      id: 6,
      route: "SF Airport → City Center",
      vehicle: "BUS-408",
      driver: "Kathy Pacheco",
      departure: "Apr 28, 2025 5:14 pm",
      eta: "May 3, 2025 10:36 pm",
      status: "On Route",
    },
  ];

  return (
    <div>
      <div className="bg-sidebar border border-main rounded-[12px] overflow-hidden">
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
              action: "",
            }}
            td={data}
            customFields={[
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
            ]}
          />
        </div>
      </div>
    </div>
  );
}
