import React from "react";
import Table from "../../Conponents/Table";
import { FiltersIcon } from "../../CustomIcons";
import userimg from "../../assets/images/dummy-user.png";

export default function Attendance() {
  const cards = [
    { title: "Today’s Attendance", value: "85%" },
    { title: "Late Check-ins Today", value: "12" },
    { title: "Top Performer of the Week", value: "Alex Peterson" },
    { title: "Missed Shifts (This Month)", value: "6" },
  ];

  const headers = [
    "Employee",
    "Role",
    "Date",
    "Check-In",
    "Check-Out",
    "Status",
    "Total Hours",
  ];

  const data = [
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Active",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Inactive",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Active",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Inactive",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Active",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Inactive",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Active",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Inactive",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Active",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Inactive",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Active",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Inactive",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Active",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Inactive",
      lactive: "6 hours",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      date: "May 9, 2025",
      checkin: "10:22 am",
      checkout: "4:45 pm",
      status: "Active",
      lactive: "6 hours",
    },
  ];

  const rows = data.map((item) => {
    const status = item.status.toLowerCase() === "active" ? "1" : "2";
    return [
      <div className="flex items-center gap-2">
        <img className="size-10 rounded-full" src={item.img} alt="img" />
        <p>{item.name}</p>
      </div>,
      item.role,
      item.date,
      item.checkin,
      item.checkout,
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          status === "1" ? "bg-[var(--bgsuccess)]" : "bg-[var(--bgatblue)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            status === "1" ? "bg-[var(--csuccess)]" : "bg-[var(--catblue)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            status === "1" ? "text-[var(--csuccess)]" : "text-[var(--catblue)]"
          }`}
        >
          {item.status}
        </p>
      </div>,
      item.lactive,
    ];
  });

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
      <div className="mt-4 bg-sidebar border border-main rounded-[12px]">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">Attendance</p>
          <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main ms-auto">
            <span>Filters</span>
            <FiltersIcon className="text-lg" />
          </button>
        </div>
        <div>
          <Table headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
}
