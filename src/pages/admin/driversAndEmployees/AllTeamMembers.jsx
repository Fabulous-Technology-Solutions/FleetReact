import React from "react";
import { FiltersIcon } from "../../../CustomIcons";
import { statusStyles } from "../../../modules/helpers";
import TableMui from "../../../components/TableMui";
import { GoDotFill } from "react-icons/go";
import { Avatar } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

export default function AllTeamMembers() {
  const cards = [
    { title: "Total Employees", value: "80" },
    { title: "Drivers", value: "85" },
    { title: "Mechanics", value: "8" },
    { title: "Non-Compliant", value: "92%" },
  ];

  const data = [
    {
      id: 1,
      name: "James Hall",
      role: "Driver",
      email: "olivia@untitledui.com",
      status: "Active",
      checkerStatus: "Verified",
      lastActive: "1h ago",
    },
    {
      id: 2,
      name: "Paula Mora",
      role: "Manager",
      email: "phoenix@untitledui.com",
      status: "Active",
      checkerStatus: "Verified",
      lastActive: "2 days ago",
    },
    {
      id: 3,
      name: "Ricky Smith",
      role: "Mechanic",
      email: "lanag@untitledui.com",
      status: "Active",
      checkerStatus: "Verified",
      lastActive: "3h ago",
    },
    {
      id: 4,
      name: "Kimberly",
      role: "Driver",
      email: "demi@untitledui.com",
      status: "Active",
      checkerStatus: "Not Verified",
      lastActive: "1h ago",
    },
    {
      id: 5,
      name: "David Elson",
      role: "Mechanic",
      email: "candice@untitledui.com",
      status: "Active",
      checkerStatus: "Not Verified",
      lastActive: "3h ago",
    },
    {
      id: 6,
      name: "Mary Freund",
      role: "Driver",
      email: "natali@untitledui.com",
      status: "Active",
      checkerStatus: "Verified",
      lastActive: "6h ago",
    },
    {
      id: 7,
      name: "Jerry Helfer",
      role: "Driver",
      email: "drew@untitledui.com",
      status: "Active",
      checkerStatus: "Not Verified",
      lastActive: "3h ago",
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
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              name: "Name",
              role: "Role",
              email: "Email address",
              status: "Status",
              checkerStatus: "Checker Status",
              lastActive: "Last Active",
              action: "",
            }}
            td={data}
            customFields={[
              {
                name: "name",
                data: (value) => {
                  return (
                    <div className={`inline-flex gap-2 items-center `}>
                      <Avatar />
                      {value}
                    </div>
                  );
                },
              },
              {
                name: "status",
                data: (value) => {
                  const styles = statusStyles[value] || {
                    text: "text-gray-400",
                    bg: "bg-gray-100",
                  };
                  return (
                    <div
                      className={`inline-flex gap-2 items-center rounded-full py-1 px-3 ${styles.text} ${styles.bg}`}
                    >
                      <GoDotFill />
                      {value}
                    </div>
                  );
                },
              },
              {
                name: "checkerStatus",
                data: (value) => {
                  const styles = statusStyles[value] || {
                    text: "text-gray-400",
                    bg: "bg-gray-100",
                  };
                  return (
                    <div
                      className={`inline-flex gap-2 items-center rounded-full py-1 px-3 ${styles.text} ${styles.bg}`}
                    >
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
