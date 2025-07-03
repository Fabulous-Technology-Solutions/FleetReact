import React from "react";
import { FiltersIcon } from "../../CustomIcons";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { statusStyles } from "../../modules/helpers";
import { Avatar } from "@mui/material";
import TableMui from "../../Conponents/TableMui";

export default function Attendance() {
  const cards = [
    { title: "Today’s Attendance", value: "85%" },
    { title: "Late Check-ins Today", value: "12" },
    { title: "Top Performer of the Week", value: "Alex Peterson" },
    { title: "Missed Shifts (This Month)", value: "6" },
  ];

const data = [
    {
      id: 1,
      employee: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkIn: "4:45 pm",
      checkOut: "10:22 am",
      status: "Present",
      hours: "6 hours",
    },
    {
      id: 2,
      employee: "Paula Mora",
      role: "Manager",
      date: "May 14, 2025",
      checkIn: "3:33 pm",
      checkOut: "10:25 am",
      status: "Present",
      hours: "6 hours",
    },
    {
      id: 3,
      employee: "Ricky Smith",
      role: "Mechanic",
      date: "May 8, 2025",
      checkIn: "7:48 am",
      checkOut: "2:20 am",
      status: "Present",
      hours: "6 hours",
    },
    {
      id: 4,
      employee: "Kimberly",
      role: "Manager",
      date: "Apr 22, 2025",
      checkIn: "",
      checkOut: "",
      status: "On Leave",
      hours: "",
    },
    {
      id: 5,
      employee: "David Elson",
      role: "Mechanic",
      date: "May 11, 2025",
      checkIn: "4:06 pm",
      checkOut: "12:25 pm",
      status: "Present",
      hours: "6 hours",
    },
    {
      id: 6,
      employee: "Mary Freund",
      role: "Driver",
      date: "Apr 23, 2025",
      checkIn: "11:45 pm",
      checkOut: "2:40 pm",
      status: "Present",
      hours: "6 hours",
    },
    {
      id: 7,
      employee: "Jerry Helfer",
      role: "Driver",
      date: "May 20, 2025",
      checkIn: "4:43 pm",
      checkOut: "8:19 pm",
      status: "Present",
      hours: "6 hours",
    },
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
            <div className="mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-sidebar border border-main rounded-[12px] overflow-hidden">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">Attendance</p>
          <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main ms-auto">
            <span>Filters</span>
            <FiltersIcon className="text-lg" />
          </button>
        </div>
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              employee: "Employee",
              role: "Role",
              date: "Date",
              checkIn: "Check-In",
              checkOut: "Check-Out",
              status: "Status",
              hours: "Total Hours",
            }}
            td={data}
            customFields={[
              {
                name: "employee",
                data: (value, item) => (
                  <div className="inline-flex gap-2 items-center">
                    <Avatar src="" />
                    {value}
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
                    <div className={`inline-flex gap-2 items-center`}>
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
