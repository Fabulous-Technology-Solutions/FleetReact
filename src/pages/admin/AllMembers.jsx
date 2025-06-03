import React from "react";
import Table from "../../Conponents/Table";
import { DeleteIcon, EditIcon, FiltersIcon } from "../../CustomIcons";
import userimg from "../../assets/images/dummy-user.png";

export default function AllMembers() {
  const cards = [
    { title: "Total Employees", value: "80" },
    { title: "Drivers", value: "85" },
    { title: "Mechanics", value: "8" },
    { title: "Non-Compliant", value: "92%" },
  ];

  const headers = [
    "Name",
    "Role",
    "Email address",
    "Status",
    "Documents",
    "Last Active",
    "",
  ];

  const data = [
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Active",
      dstatus: "Complete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Inactive",
      dstatus: "Incomplete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Active",
      dstatus: "Complete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Inactive",
      dstatus: "Incomplete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Active",
      dstatus: "Complete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Inactive",
      dstatus: "Incomplete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Active",
      dstatus: "Complete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Inactive",
      dstatus: "Incomplete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Active",
      dstatus: "Complete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Inactive",
      dstatus: "Incomplete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Active",
      dstatus: "Complete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Inactive",
      dstatus: "Incomplete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Active",
      dstatus: "Complete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Inactive",
      dstatus: "Incomplete",
      lactive: "1h ago",
    },
    {
      img: userimg,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Active",
      dstatus: "Complete",
      lactive: "1h ago",
    },
  ];

  const rows = data.map((item) => {
    const status = item.status.toLowerCase() === "active" ? "1" : "2";
    const dstatus = item.dstatus.toLowerCase() === "complete" ? "1" : "2";
    return [
      <div className="flex items-center gap-2">
        <img className="size-10 rounded-full" src={item.img} alt="img" />
        <p>{item.name}</p>
      </div>,
      item.role,
      item.email,
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
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          dstatus === "1" ? "bg-[var(--bgsuccess)]" : "bg-[var(--bgatblue)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            dstatus === "1" ? "bg-[var(--csuccess)]" : "bg-[var(--catblue)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            dstatus === "1" ? "text-[var(--csuccess)]" : "text-[var(--catblue)]"
          }`}
        >
          {item.dstatus}
        </p>
      </div>,
      item.lactive,
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
      <div className="mt-4 bg-sidebar border border-main rounded-[12px] overflow-hidden">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <p className="c-primary text-sm font-semibold">All Team Members</p>
            <p className="text-xs py-1 px-2 text-[var(--catblue)] bg-[var(--bgatblue)] rounded-full">
              100 users
            </p>
          </div>
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
