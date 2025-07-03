import React from "react";
import { FiltersIcon } from "../../../CustomIcons";
import { statusStyles } from "../../../modules/helpers";
import { GoDotFill } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import TableMui from "../../../components/TableMui";

export default function JobRequests() {
  const cards = [
    { title: "Active Job Postings", value: "12" },
    {
      title: "AI-Sourced Candidates",
      value: "136",
      desc: "This Week",
    },
    {
      title: "Avg. Time to First Interview",
      value: "2.2",
      desc: "Days",
    },
    { title: "Positions Filled", value: "8", desc: "This Month" },
  ];

  const data = [
    {
      id: 1,
      jobTitle: "CDL Driver",
      location: "Newark, NJ",
      openings: 3,
      status: "Draft",
      aiSourced: 42,
      interviews: 5,
      datePosted: "May 18, 2025",
    },
    {
      id: 2,
      jobTitle: "Fleet Mechanic",
      location: "Houston, TX",
      openings: 1,
      status: "Hiring",
      aiSourced: 27,
      interviews: 2,
      datePosted: "May 20, 2025",
    },
    {
      id: 3,
      jobTitle: "Dispatcher",
      location: "Chicago, IL",
      openings: 2,
      status: "Screening",
      aiSourced: 0,
      interviews: 0,
      datePosted: "May 20, 2025",
    },
    {
      id: 4,
      jobTitle: "Bus Driver",
      location: "Chicago, IL",
      openings: 4,
      status: "Interviewing",
      aiSourced: 51,
      interviews: 7,
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
            AI Job Posting Pipeline
          </p>
          <div className="flex items-center gap-2 ms-auto flex-wrap justify-end">
            <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              <span>Filters</span>
              <FiltersIcon className="text-lg" />
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
              Post New Job
            </button>
          </div>
        </div>
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              jobTitle: "Job Title",
              location: "Location",
              openings: "Openings",
              status: "Status",
              aiSourced: "AI-Sourced Candidates",
              interviews: "Interviews Scheduled",
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
