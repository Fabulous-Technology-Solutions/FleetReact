import React from "react";
import Table from "../../Conponents/Table";
import { DeleteIcon, EditIcon, FiltersIcon } from "../../CustomIcons";
import userimg from "../../assets/images/dummy-user.png";

const UserRole = () => {
  const cards = [
    { title: "Total Employees", value: "80" },
    { title: "Drivers", value: "85" },
    { title: "Mechanics", value: "8" },
    { title: "Non-Compliant", value: "92%" },
  ];

  const headers = ["Role Name", "Description", "Total Users Assigned", ""];

  const data = [
    {
      name: "Admin",
      desc: "Full access to all modules and settings",
      users: "3",
    },
    {
      name: "Fleet Manager",
      desc: "Manage vehicles, routes, and maintenance",
      users: "12",
    },
    {
      name: "Finance Manager",
      desc: "Manage payroll, invoices, and expenses",
      users: "5",
    },
  ];

  const rows = data.map((item) => {
    return [
      item.name,
      <p className="w-[320px] flex-wrap">{item.desc}</p>,
      item.users,
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
      <div className="bg-sidebar border border-main rounded-[12px] overflow-hidden">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">
            User Roles & Permissions
          </p>
          <div className="flex items-center gap-2 ms-auto flex-wrap justify-end">
            <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              <span>Filters</span>
              <FiltersIcon className="text-lg" />
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
              Add New Role
            </button>
          </div>
        </div>
        <div>
          <Table headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default UserRole;
