import React from "react";
import { FiltersIcon } from "../../../CustomIcons";
import TableMui from "../../../components/TableMui";
import { statusStyles } from "../../../modules/helpers";
import { GoDotFill } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

export default function VehicleMaintenance() {
  const data = [
    {
      id: 1,
      vehicle: "Ford Transit 350HD",
      type: "Routine Inspection",
      lastService: "May 1, 2025",
      nextDue: "May 13, 2025",
      mechanic: "John Myers",
      status: "On Schedule",
    },
    {
      id: 2,
      vehicle: "Peterbilt 579",
      type: "Engine Check",
      lastService: "May 11, 2025",
      nextDue: "May 14, 2025",
      mechanic: "Alex Buckmaster",
      status: "Due Soon",
    },
    {
      id: 3,
      vehicle: "Tesla Semi X2",
      type: "Brake Replacement",
      lastService: "May 17, 2025",
      nextDue: "May 10, 2025",
      mechanic: "Kathy Pacheco",
      status: "On Schedule",
    },
    {
      id: 4,
      vehicle: "Mercedes Sprinter",
      type: "Tire Rotation",
      lastService: "Apr 29, 2025",
      nextDue: "Apr 22, 2025",
      mechanic: "Chris Glasser",
      status: "Due Soon",
    },
    {
      id: 5,
      vehicle: "Peterbilt 579",
      type: "Oil Change",
      lastService: "Apr 25, 2025",
      nextDue: "May 20, 2025",
      mechanic: "Frances Swann",
      status: "Overdue",
    },
    {
      id: 6,
      vehicle: "Ford Transit 350HD",
      type: "Emergency Repair",
      lastService: "Apr 22, 2025",
      nextDue: "Apr 28, 2025",
      mechanic: "Patricia Sanders",
      status: "Due Soon",
    },
  ];

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
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              vehicle: "Vehicle",
              type: "Type",
              lastService: "Last Service Date",
              nextDue: "Next Due Date",
              mechanic: "Assigned Mechanic",
              status: "Status",
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
