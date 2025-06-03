import React from "react";
import Table from "../../Conponents/Table";
import { DeleteIcon, EditIcon, FiltersIcon } from "../../CustomIcons";

export default function IncidentReports() {
  const cards = [
    { title: "Total Incidents", value: "18" },
    { title: "Unresolved Reports", value: "5" },
    { title: "High Severity Cases", value: "3" },
    { title: "Most Reported Employee", value: "John Carter" },
  ];

  const headers = [
    "Report ID",
    "Date",
    "Reported By",
    "Role",
    "Type",
    "Severity",
    "Status",
    "Assigned To",
    "",
  ];

  const data = [
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "High",
      status: "Resolved",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Medium",
      status: "In Review",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Low",
      status: "Unresolved",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "High",
      status: "Resolved",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Medium",
      status: "In Review",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Low",
      status: "Unresolved",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "High",
      status: "Resolved",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Medium",
      status: "In Review",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Low",
      status: "Unresolved",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "High",
      status: "Resolved",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Medium",
      status: "In Review",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Low",
      status: "Unresolved",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "High",
      status: "Resolved",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Medium",
      status: "In Review",
      assignedTo: "John Carter",
    },
    {
      reportid: "#IR-2034",
      date: "May 9, 2025",
      reportedBy: "John Carter",
      role: "Driver",
      type: "Minor Accident",
      severity: "Low",
      status: "Unresolved",
      assignedTo: "John Carter",
    },
  ];

  const rows = data.map((item) => {
    const status =
      item.status.toLowerCase() === "resolved"
        ? "1"
        : item.status.toLowerCase() === "in review"
        ? "2"
        : "3";
    const sstatus =
      item.severity.toLowerCase() === "high"
        ? "1"
        : item.severity.toLowerCase() === "medium"
        ? "2"
        : "3";
    return [
      item.reportid,
      item.date,
      item.reportedBy,
      item.role,
      item.type,
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          sstatus === "1"
            ? "bg-[var(--bgdanger)]"
            : sstatus === "2"
            ? "bg-[var(--bgwarning)]"
            : "bg-[var(--bgatblue)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            sstatus === "1"
              ? "bg-[var(--cdanger)]"
              : sstatus === "2"
              ? "bg-[var(--cwarning)]"
              : "bg-[var(--catblue)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            sstatus === "1"
              ? "text-[var(--cdanger)]"
              : sstatus === "2"
              ? "text-[var(--cwarning)]"
              : "text-[var(--catblue)]"
          }`}
        >
          {item.severity}
        </p>
      </div>,
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          status === "1"
            ? "bg-[var(--bgsuccess)]"
            : status === "2"
            ? "bg-[var(--bgwarning)]"
            : "bg-[var(--bgdanger)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            status === "1"
              ? "bg-[var(--csuccess)]"
              : status === "2"
              ? "bg-[var(--cwarning)]"
              : "bg-[var(--cdanger)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            status === "1"
              ? "text-[var(--csuccess)]"
              : status === "2"
              ? "text-[var(--cwarning)]"
              : "text-[var(--cdanger)]"
          }`}
        >
          {item.status}
        </p>
      </div>,
      item.assignedTo,
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
            <div className="mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-sidebar border border-main rounded-[12px]">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">Incident Reports</p>
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
