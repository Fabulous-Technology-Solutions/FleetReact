import React from "react";
import Table from "../../Conponents/Table";
import { DeleteIcon, EditIcon, FiltersIcon } from "../../CustomIcons";

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

  const headers = [
    "Job Title",
    "Location",
    "Openings",
    "Status",
    <p className="text-wrap min-w-[100px]">AI-Sourced Candidates</p>,
    <p className="text-wrap min-w-[100px]">Interviews Scheduled</p>,
    "Date Posted",
    "",
  ];

  const data = [
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Hiring",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Interviewing",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Screening",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Draft",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Hiring",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Interviewing",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Screening",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Draft",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Hiring",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Interviewing",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Screening",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Draft",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Hiring",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Interviewing",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
    {
      title: "CDL Driver",
      location: "Newark, NJ",
      openings: "3",
      status: "Screening",
      aiCandidates: "42",
      interviews: "5",
      datePosted: "2023-10-01",
    },
  ];

  const rows = data.map((item) => {
    const status =
      item.status.toLowerCase() === "hiring"
        ? "1"
        : item.status.toLowerCase() === "interviewing"
        ? "2"
        : item.status.toLowerCase() === "screening"
        ? "3"
        : "4";
    return [
      item.title,
      item.location,
      item.openings,
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          status === "1"
            ? "bg-[var(--bgsuccess)]"
            : status === "2"
            ? "bg-[var(--bgwarning)]"
            : status === "3"
            ? "bg-[var(--bgatblue)]"
            : "bg-[var(--bgdanger)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            status === "1"
              ? "bg-[var(--csuccess)]"
              : status === "2"
              ? "bg-[var(--cwarning)]"
              : status === "3"
              ? "bg-[var(--catblue)]"
              : "bg-[var(--cdanger)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            status === "1"
              ? "text-[var(--csuccess)]"
              : status === "2"
              ? "text-[var(--cwarning)]"
              : status === "3"
              ? "text-[var(--catblue)]"
              : "text-[var(--cdanger)]"
          }`}
        >
          {item.status}
        </p>
      </div>,
      item.aiCandidates,
      item.interviews,
      item.datePosted,
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
        <div>
          <Table headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
}
