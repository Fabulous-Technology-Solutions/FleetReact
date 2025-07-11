import React from "react";
import { FiltersIcon } from "../../../CustomIcons";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import TableMui from "../../../components/TableMui";
import { statusStyles } from "../../../modules/helpers";
import { RiFileDownloadLine } from "react-icons/ri";

export default function IncidentReports() {
  const cards = [
    { title: "Total Incidents", value: "18" },
    { title: "Unresolved Reports", value: "5" },
    { title: "High Severity Cases", value: "3" },
    { title: "Most Reported Employee", value: "John Carter" },
  ];

 const data = [
  {
    id: 1,
    reportId: "#IR-2034",
    date: "May 9, 2025",
    reportedBy: "John Carter",
    role: "Driver",
    reportDetails: "Download",
    status: "In Review",
    assignedTo: "John Carter"
  },
  {
    id: 2,
    reportId: "#IR-2035",
    date: "May 14, 2025",
    reportedBy: "Emma Davis",
    role: "Mechanic",
    reportDetails: "Download",
    status: "Resolved",
    assignedTo: "Emma Davis"
  },
  {
    id: 3,
    reportId: "#IR-2036",
    date: "May 8, 2025",
    reportedBy: "Ryan Jones",
    role: "Driver",
    reportDetails: "Download",
    status: "Unresolved",
    assignedTo: "Ryan Jones"
  },
  {
    id: 4,
    reportId: "#IR-2037",
    date: "Apr 22, 2025",
    reportedBy: "Ryan James",
    role: "Driver",
    reportDetails: "Download",
    status: "In Review",
    assignedTo: "Admin"
  }
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
            <div className="mt-2 flex justify-between gap-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              {card.title === "Total Incidents" && <p className="c-secondary">(This Month)</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-sidebar border border-main rounded-[12px] overflow-hidden">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">Incident Reports</p>
          <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main ms-auto">
            <span>Filters</span>
            <FiltersIcon className="text-lg" />
          </button>
        </div>
        <div className="my-3">
  <TableMui
    loading={false}
    th={{
      reportId: "Report ID",
      date: "Date",
      reportedBy: "Reported By",
      role: "Role",
      reportDetails: "Report Details",
      status: "Status",
      assignedTo: "Assigned To",
      action: ""
    }}
    td={data}
    customFields={[
      {
        name: "reportDetails",
        data: (value) => (
          <div className="inline-flex gap-3 cursor-pointer">
            Download  <RiFileDownloadLine className="text-lg" />

          </div>
        )
      },
      {
        name: "status",
        data: (value) => {
          const styles = statusStyles[value] || {
            text: "text-gray-400",
            bg: "bg-gray-100"
          };
          return (
            <div className={`inline-flex gap-2 items-center rounded-full py-1 px-3 ${styles.text} ${styles.bg}`}>
              <GoDotFill />
              <span>{value}</span>
            </div>
          );
        }
      },
      {
        name: "action",
        data: () => (
          <div className="inline-flex gap-3 items-center">
            <FaRegTrashAlt className="cursor-pointer text-lg text-gray-500 hover:text-red-500" />
            <FiEdit2 className="cursor-pointer text-lg text-gray-500 hover:text-blue-500" />
          </div>
        )
      }
    ]}
  />
</div>
      </div>
    </div>
  );
}
