import React from "react";
import Table from "../../Conponents/Table";
import { FiltersIcon } from "../../CustomIcons";

export default function CustomersManagement() {
  const cards = [
    { title: "Total Customers", value: "125", desc: "Active Accounts" },
    { title: "New Customers", value: "18", desc: "Compared to last month" },
    { title: "Avg. Jobs per Customer", value: "4.2", desc: "Past 30 days" },
    { title: "Satisfaction Rate", value: "94%" },
  ];

  const headers = [
    "Customer Name",
    "Company",
    "Contact Person",
    "Email",
    "Phone",
    "Status",
    "Total Jobs",
  ];

  const data = [
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Active",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Inactive",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Active",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Inactive",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Active",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Inactive",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Active",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Inactive",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Active",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Inactive",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Active",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Inactive",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Active",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Inactive",
      totalJobs: "12",
    },
    {
      name: "ABC Logistics",
      company: "ABC Inc.",
      contact: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "Active",
      totalJobs: "12",
    },
  ];

  const rows = data.map((item) => {
    const status = item.status.toLowerCase() === "active" ? "1" : "2";
    return [
      item.name,
      item.company,
      item.contact,
      item.email,
      item.phone,
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          status === "1" ? "bg-[var(--bgsuccess)]" : "bg-[var(--bgwarning)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            status === "1" ? "bg-[var(--csuccess)]" : "bg-[var(--cwarning)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            status === "1" ? "text-[var(--csuccess)]" : "text-[var(--cwarning)]"
          }`}
        >
          {item.status}
        </p>
      </div>,
      item.totalJobs,
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
          <p className="c-primary text-sm font-semibold">Customer Directory</p>
          <div className="flex items-center gap-2 ms-auto flex-wrap justify-end">
            <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              <span>Filters</span>
              <FiltersIcon className="text-lg" />
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
              Add New Member
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
