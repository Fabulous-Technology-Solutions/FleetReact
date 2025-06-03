import React from "react";
import Table from "../../Conponents/Table";
import { DeleteIcon, EditIcon, FiltersIcon } from "../../CustomIcons";

export default function VehicleMaintenance() {
  const headers = [
    "Vehicle",
    "Type",
    "Last Service Date",
    "Next Due Date",
    "Assigned Mechanic",
    "Status",
    "",
  ];

  const data = [
    {
      vehicle: "Ford Transit 350HD",
      type: "Routine Inspection",
      lastServiceDate: "May 1, 2025",
      nextDueDate: "May 13, 2025",
      assignedMechanic: "John Myers",
      status: "On Schedule",
    },
    {
      vehicle: "Peterbilt 579",
      type: "Engine Check",
      lastServiceDate: "May 11, 2025",
      nextDueDate: "May 14, 2025",
      assignedMechanic: "Kathy Pacheco",
      status: "Due Soon",
    },
    {
      vehicle: "Mercedes Sprinter",
      type: "Tire Rotation",
      lastServiceDate: "Apr 29, 2025",
      nextDueDate: "Apr 22, 2025",
      assignedMechanic: "Chris Glasser",
      status: "Overdue",
    },
    {
      vehicle: "Ford Transit 350HD",
      type: "Routine Inspection",
      lastServiceDate: "May 1, 2025",
      nextDueDate: "May 13, 2025",
      assignedMechanic: "John Myers",
      status: "On Schedule",
    },
    {
      vehicle: "Peterbilt 579",
      type: "Engine Check",
      lastServiceDate: "May 11, 2025",
      nextDueDate: "May 14, 2025",
      assignedMechanic: "Kathy Pacheco",
      status: "Due Soon",
    },
    {
      vehicle: "Mercedes Sprinter",
      type: "Tire Rotation",
      lastServiceDate: "Apr 29, 2025",
      nextDueDate: "Apr 22, 2025",
      assignedMechanic: "Chris Glasser",
      status: "Overdue",
    },
    {
      vehicle: "Ford Transit 350HD",
      type: "Routine Inspection",
      lastServiceDate: "May 1, 2025",
      nextDueDate: "May 13, 2025",
      assignedMechanic: "John Myers",
      status: "On Schedule",
    },
    {
      vehicle: "Peterbilt 579",
      type: "Engine Check",
      lastServiceDate: "May 11, 2025",
      nextDueDate: "May 14, 2025",
      assignedMechanic: "Kathy Pacheco",
      status: "Due Soon",
    },
    {
      vehicle: "Mercedes Sprinter",
      type: "Tire Rotation",
      lastServiceDate: "Apr 29, 2025",
      nextDueDate: "Apr 22, 2025",
      assignedMechanic: "Chris Glasser",
      status: "Overdue",
    },
    {
      vehicle: "Ford Transit 350HD",
      type: "Routine Inspection",
      lastServiceDate: "May 1, 2025",
      nextDueDate: "May 13, 2025",
      assignedMechanic: "John Myers",
      status: "On Schedule",
    },
    {
      vehicle: "Peterbilt 579",
      type: "Engine Check",
      lastServiceDate: "May 11, 2025",
      nextDueDate: "May 14, 2025",
      assignedMechanic: "Kathy Pacheco",
      status: "Due Soon",
    },
    {
      vehicle: "Mercedes Sprinter",
      type: "Tire Rotation",
      lastServiceDate: "Apr 29, 2025",
      nextDueDate: "Apr 22, 2025",
      assignedMechanic: "Chris Glasser",
      status: "Overdue",
    },
    {
      vehicle: "Ford Transit 350HD",
      type: "Routine Inspection",
      lastServiceDate: "May 1, 2025",
      nextDueDate: "May 13, 2025",
      assignedMechanic: "John Myers",
      status: "On Schedule",
    },
    {
      vehicle: "Peterbilt 579",
      type: "Engine Check",
      lastServiceDate: "May 11, 2025",
      nextDueDate: "May 14, 2025",
      assignedMechanic: "Kathy Pacheco",
      status: "Due Soon",
    },
    {
      vehicle: "Mercedes Sprinter",
      type: "Tire Rotation",
      lastServiceDate: "Apr 29, 2025",
      nextDueDate: "Apr 22, 2025",
      assignedMechanic: "Chris Glasser",
      status: "Overdue",
    },
  ];

  const rows = data.map((item) => {
    const status =
      item.status.toLowerCase() === "on schedule"
        ? "1"
        : item.status.toLowerCase() === "overdue"
        ? "2"
        : "3";
    return [
      item.vehicle,
      item.type,
      item.lastServiceDate,
      item.nextDueDate,
      item.assignedMechanic,
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          status === "1"
            ? "bg-[var(--bgsuccess)]"
            : status === "2"
            ? "bg-[var(--bgdanger)]"
            : "bg-[var(--bgwarning)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            status === "1"
              ? "bg-[var(--csuccess)]"
              : status === "2"
              ? "bg-[var(--cdanger)]"
              : "bg-[var(--cwarning)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            status === "1"
              ? "text-[var(--csuccess)]"
              : status === "2"
              ? "text-[var(--cdanger)]"
              : "text-[var(--cwarning)]"
          }`}
        >
          {item.status}
        </p>
      </div>,
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
      <div className="mt-4 bg-sidebar border border-main rounded-[12px] overflow-hidden">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">
            Maintenance Overview
          </p>
          <div className="flex items-center gap-2 ms-auto flex-wrap justify-end">
            <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              <span>Filters</span>
              <FiltersIcon className="text-lg" />
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
              Add New Log Maintenance
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
