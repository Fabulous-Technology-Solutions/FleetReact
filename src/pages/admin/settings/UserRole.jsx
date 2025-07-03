import React from "react";
import { FiltersIcon } from "../../../CustomIcons";
import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import TableMui from "../../../components/TableMui";

const UserRole = () => {
  const cards = [
    { title: "Total Employees", value: "80" },
    { title: "Drivers", value: "85" },
    { title: "Mechanics", value: "8" },
    { title: "Non-Compliant", value: "92%" },
  ];

  const data = [
    {
      id: 1,
      role: "Admin",
      description: "Full access to all modules and settings",
      users: 3,
    },
    {
      id: 2,
      role: "Fleet Manager",
      description: "Manage vehicles, routes, and maintenance",
      users: 12,
    },
    {
      id: 3,
      role: "Finance Manager",
      description: "Manage payroll, invoices, and expenses",
      users: 5,
    },
  ];

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
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              role: "Role Name",
              description: "Description",
              users: "Total Users Assigned",
              action: "",
            }}
            td={data}
            customFields={[
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
};

export default UserRole;
