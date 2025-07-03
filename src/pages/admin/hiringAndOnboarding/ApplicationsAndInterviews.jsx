import React from "react";
import { FiltersIcon } from "../../../CustomIcons";
import { statusStyles } from "../../../modules/helpers";
import { GoDotFill } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import TableMui from "../../../components/TableMui";

export default function ApplicationsAndInterviews() {
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

  const data = [
    {
      id: 1,
      candidateName: "John Ellis",
      position: "CDL Driver",
      source: "Indeed (AI)",
      stage: "Interview Scheduled",
      interviewDate: "May 24, 2025",
      status: "Rejected",
      datePosted: "May 18, 2025",
    },
    {
      id: 2,
      candidateName: "Maria Khan",
      position: "Fleet Mechanic",
      source: "Indeed (AI)",
      stage: "Screening Complete",
      interviewDate: "May 24, 2025",
      status: "Confirmed",
      datePosted: "May 20, 2025",
    },
    {
      id: 3,
      candidateName: "Leo Martinez",
      position: "Dispatcher",
      source: "Indeed (AI)",
      stage: "Awaiting Screening",
      interviewDate: "May 24, 2025",
      status: "In Review",
      datePosted: "May 20, 2025",
    },
    {
      id: 4,
      candidateName: "Brenda Lee",
      position: "CDL Driver",
      source: "Indeed (AI)",
      stage: "Interview Scheduled",
      interviewDate: "May 24, 2025",
      status: "Pending",
      datePosted: "May 15, 2025",
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
            <div className="flex items-center gap-2 justify-between flex-wrap mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              {card.desc && (
                <p className="text-xs c-secondary ms-auto">{card.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-sidebar border border-main rounded-[12px] overflow-hidden">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">
            AI-Powered Application Pipeline
          </p>
          <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main ms-auto">
            <span>Filters</span>
            <FiltersIcon className="text-lg" />
          </button>
        </div>
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              candidateName: "Candidate Name",
              position: "Position Applied",
              source: "Source",
              stage: "Stage",
              interviewDate: "Interview Date",
              status: "Status",
              datePosted: "Date Posted",
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
              {
                name: "action",
                data: (value) => {
                  return (
                    <div className="inline-flex gap-3 items-center">
                      <FaRegTrashAlt className="cursor-pointer text-lg" />
                      <FiEdit2 className="cursor-pointer text-lg" />
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
