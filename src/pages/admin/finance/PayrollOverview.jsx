import React, { useState } from "react";
import SlideIcon from "../../../CustomIcons/SlideIcon";
import { statusStyles } from "../../../modules/helpers";
import { GoDotFill } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import TableMui from "../../../components/TableMui";
import NewPayRollModal from "../../../components/modals/NewPayRollModal";

export default function PayrollOverview() {
  const [show, setShow] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const cards = [
    { title: "Total Payroll", value: "$124,000" },
    { title: "Pending Payments", value: "$18,450" },
    { title: "Employees Paid", value: "124 / 140" },
    { title: "Next Payroll Date", value: "June 5, 2025" },
  ];

  const data = [
    {
      id: 1,
      employee: "John Davis",
      role: "Fleet Driver",
      period: "May 2025",
      gross: "$3,500",
      deductions: "$450",
      net: "$3,050",
      status: "Paid",
    },
    {
      id: 2,
      employee: "Alicia Morgan",
      role: "Dispatcher",
      period: "May 2025",
      gross: "$3,200",
      deductions: "$400",
      net: "$2,800",
      status: "Pending",
    },
    {
      id: 3,
      employee: "Chris Barton",
      role: "Mechanic",
      period: "May 2025",
      gross: "$2,900",
      deductions: "$250",
      net: "$2,650",
      status: "Pending",
    },
    {
      id: 4,
      employee: "Linda James",
      role: "Compliance Lead",
      period: "May 2025",
      gross: "$4,100",
      deductions: "$500",
      net: "$3,600",
      status: "Paid",
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
            <p className="text-xl font-semibold c-primary mt-2">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="border border-main rounded-[12px] bg-sidebar mt-4 overflow-hidden">
        <div className="md:flex items-center justify-between p-4">
          <div>
            <h4 className="c-primary font-semibold text-xl">Payroll</h4>
          </div>
          <div className="flex items-center justify-end gap-3 md:mt-0 mt-3 flex-wrap">
            <div>
              <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
                Filter <SlideIcon className="c-primary" />
              </button>
            </div>
            <div>
              <button
                className="bg-navlink py-2 c-inverted border border-[#60A5FA] px-5 rounded-md"
                onClick={() => {
                  setModalMode("add");
                  setShow(true);
                }}
              >
                Add Payroll Entry{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              employee: "Employee Name",
              role: "Role",
              period: "Pay Period",
              gross: "Gross Pay",
              deductions: "Deductions",
              net: "Net Pay",
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
                      <FiEdit2
                        className="cursor-pointer text-lg"
                        onClick={() => {
                          setModalMode("edit");
                          setShow(true);
                        }}
                      />
                    </div>
                  );
                },
              },
            ]}
          />
        </div>
      </div>
      <NewPayRollModal
        show={show}
        onHide={() => setShow(false)}
        modalMode={modalMode}
      />
    </div>
  );
}
