import React from "react";
import Table from "../../Conponents/Table";
import { DeleteIcon, EditIcon, FiltersIcon } from "../../CustomIcons";

export default function Interviews() {
  const cards = [
    { title: "Total Applications", value: "124", desc: "This Week" },
    {
      title: "Interviews Scheduled",
      value: "28",
    },
    {
      title: "Hires",
      value: "11",
      desc: "This Month",
    },
    { title: "Avg. Time to Hire", value: "3.4", desc: "Days" },
  ];

  const headers = [
    "Candidate Name",
    "Position Applied",
    "Source",
    "Stage",
    "Interview Date",
    "Status",
    "Date Posted",
    "",
  ];

  const data = [
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Confirmed",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "In Review",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Rejected",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Pending",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Confirmed",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "In Review",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Rejected",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Pending",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Confirmed",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "In Review",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Rejected",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Pending",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Confirmed",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "In Review",
      dateposted: "2023-10-01",
    },
    {
      cname: "John Ellis",
      position: "CDL Driver",
      source: "AI Sourcing",
      stage: "Interviewing",
      interviewdate: "2023-10-15",
      status: "Rejected",
      dateposted: "2023-10-01",
    },
  ];

  const rows = data.map((item) => {
    const status =
      item.status.toLowerCase() === "confirmed"
        ? "1"
        : item.status.toLowerCase() === "in review"
        ? "2"
        : item.status.toLowerCase() === "rejected"
        ? "3"
        : "4";
    return [
      item.cname,
      item.position,
      item.source,
      item.stage,
      item.interviewdate,
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          status === "1"
            ? "bg-[var(--bgsuccess)]"
            : status === "2"
            ? "bg-[var(--bgatblue)]"
            : status === "3"
            ? "bg-[var(--bgdanger)]"
            : "bg-[var(--bgwarning)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            status === "1"
              ? "bg-[var(--csuccess)]"
              : status === "2"
              ? "bg-[var(--catblue)]"
              : status === "3"
              ? "bg-[var(--cdanger)]"
              : "bg-[var(--cwarning)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            status === "1"
              ? "text-[var(--csuccess)]"
              : status === "2"
              ? "text-[var(--catblue)]"
              : status === "3"
              ? "text-[var(--cdanger)]"
              : "text-[var(--cwarning)]"
          }`}
        >
          {item.status}
        </p>
      </div>,
      item.dateposted,
      <div className="flex items-center gap-4">
        <button>
          <DeleteIcon className="text-lg c-secondary cursor-pointer" />
        </button>
        <button>
          <EditIcon className="text-lg c-secondary cursor-pointer" />
        </button>
      </div>,
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
            <div className="flex items-center gap-2 justify-between flex-wrap mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              {card.desc && (
                <p className="text-xs c-secondary ms-auto">{card.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-sidebar border border-main rounded-[12px]">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">
            AI-Powered Application Pipeline
          </p>
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
