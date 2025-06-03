import React from "react";
import SlideIcon from "../../CustomIcons/SlideIcon";
import Table from "../../Conponents/Table";
import { DeleteIcon, EditIcon } from "../../CustomIcons";

export default function PayrollOverview() {
  const cards = [
    { title: "Total Payroll", value: "$124,000" },
    { title: "Pending Payments", value: "$18,450" },
    { title: "Employees Paid", value: "124 / 140" },
    { title: "Next Payroll Date", value: "June 5, 2025" },
  ];

  const header = [
    "Employee Name",
    "Role",
    "Department",
    "Pay Period",
    "Gross Pay",
    "Deductions",
    "Net Pay",
    "Status",
    "",
  ];

  const data = [
    {
      ename: "John Devis",
      role: "Fleet Driver",
      department: "Transport",
      pay_period: "May 2025",
      gross_pay: "$3,500",
      deduction: "$450",
      net_pay: "$3,050",
      status: "Paid",
    },
    {
      ename: "John Devis",
      role: "Fleet Driver",
      department: "Transport",
      pay_period: "May 2025",
      gross_pay: "$3,500",
      deduction: "$450",
      net_pay: "$3,050",
      status: "Pending",
    },
    {
      ename: "John Devis",
      role: "Fleet Driver",
      department: "Transport",
      pay_period: "May 2025",
      gross_pay: "$3,500",
      deduction: "$450",
      net_pay: "$3,050",
      status: "Overdue",
    },
    {
      ename: "John Devis",
      role: "Fleet Driver",
      department: "Transport",
      pay_period: "May 2025",
      gross_pay: "$3,500",
      deduction: "$450",
      net_pay: "$3,050",
      status: "Paid",
    },
  ];
  const rows = data.map((item) => {
    const status =
      item.status.toLowerCase() === "paid"
        ? "1"
        : item.status.toLowerCase() === "pending"
        ? "2"
        : item.status.toLowerCase() === "overdue"
        ? "3"
        : "4";
    return [
      item.ename,
      item.role,
      item.department,
      item.pay_period,
      item.gross_pay,
      item.deduction,
      item.net_pay,
      <div
        className={`inline-flex items-center gap-2 py-1 px-2 rounded-full ${
          status === "1"
            ? "bg-[var(--bgsuccess)]"
            : status === "2"
            ? "bg-[var(--bgwarning)]"
            : status === "3"
            ? "bg-[var(--bgdanger)]"
            : "bg-[var(--bgatblue)]"
        }`}
      >
        <div
          className={`size-1.5 min-w-1.5 rounded-full ${
            status === "1"
              ? "bg-[var(--csuccess)]"
              : status === "2"
              ? "bg-[var(--cwarning)]"
              : status === "3"
              ? "bg-[var(--cdanger)]"
              : "bg-[var(--catblue)]"
          }`}
        ></div>
        <p
          className={`text-xs ${
            status === "1"
              ? "text-[var(--csuccess)]"
              : status === "2"
              ? "text-[var(--cwarning)]"
              : status === "3"
              ? "text-[var(--cdanger)]"
              : "text-[var(--catblue)]"
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
          <div className="flex items-center justify-end gap-3 md:mt-0 mt-3">
            <div>
              <button className="c-primary py-2 px-5 border border-csecondary rounded-md bg-sidebar flex items-center gap-1">
                Filter <SlideIcon className="c-primary" />
              </button>
            </div>
            <div>
              <button className="bg-navlink py-2 c-inverted border border-[#60A5FA] px-5 rounded-md">
                Add Payroll Entry{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Table headers={header} rows={rows} />
        </div>
      </div>
    </div>
  );
}
