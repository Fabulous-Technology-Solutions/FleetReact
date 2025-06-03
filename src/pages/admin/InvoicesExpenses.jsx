import React from "react";
import SlideIcon from "../../CustomIcons/SlideIcon";
import Table from "../../Conponents/Table";
import { DeleteIcon, EditIcon } from "../../CustomIcons";

export default function InvoiceExpenses() {
  const cards = [
    { title: "Total Invoiced", value: "$47,800", days: "This month" },
    { title: "Total Expenses", value: "$47,800", days: "This month" },
    { title: "Outstanding Payments", value: "$12,300" },
    { title: "Paid Invoices", value: "26/34" },
  ];

  const header = [
    "Invoice ID",
    "Vendor Name",
    "Category",
    "Date Issued",
    "Amount",
    "Status",
    "Due Date",
    "Action",
  ];
  const data = [
    {
      invoiceid: "INV-10023",
      vendor_name: "FastFuel Co.",
      category: "Fuel",
      date_issued: "May 5,2025",
      amount: "$3,500",
      status: "Paid",
      dueDate: "May 5,2025",
    },
    {
      invoiceid: "INV-10023",
      vendor_name: "FastFuel Co.",
      category: "Fuel",
      date_issued: "May 5,2025",
      amount: "$3,500",
      status: "Pending",
      dueDate: "May 5,2025",
    },
    {
      invoiceid: "INV-10023",
      vendor_name: "FastFuel Co.",
      category: "Fuel",
      date_issued: "May 5,2025",
      amount: "$3,500",
      status: "Overdue",
      dueDate: "May 5,2025",
    },
    {
      invoiceid: "INV-10023",
      vendor_name: "FastFuel Co.",
      category: "Fuel",
      date_issued: "May 5,2025",
      amount: "$3,500",
      status: "Paid",
      dueDate: "May 5,2025",
    },
    {
      invoiceid: "INV-10023",
      vendor_name: "FastFuel Co.",
      category: "Fuel",
      date_issued: "May 5,2025",
      amount: "$3,500",
      status: "Pending",
      dueDate: "May 5,2025",
    },
    {
      invoiceid: "INV-10023",
      vendor_name: "FastFuel Co.",
      category: "Fuel",
      date_issued: "May 5,2025",
      amount: "$3,500",
      status: "Overdue",
      dueDate: "May 5,2025",
    },
    {
      invoiceid: "INV-10023",
      vendor_name: "FastFuel Co.",
      category: "Fuel",
      date_issued: "May 5,2025",
      amount: "$3,500",
      status: "Paid",
      dueDate: "May 5,2025",
    },
    {
      invoiceid: "INV-10023",
      vendor_name: "FastFuel Co.",
      category: "Fuel",
      date_issued: "May 5,2025",
      amount: "$3,500",
      status: "Pending",
      dueDate: "May 5,2025",
    },
    {
      invoiceid: "INV-10023",
      vendor_name: "FastFuel Co.",
      category: "Fuel",
      date_issued: "May 5,2025",
      amount: "$3,500",
      status: "Overdue",
      dueDate: "May 5,2025",
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
      item.invoiceid,
      item.vendor_name,
      item.category,
      item.date_issued,
      item.amount,
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
      item.dueDate,
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
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              <p className="text-sm c-secondary">{card.days}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-main rounded-[12px] bg-sidebar mt-4 overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <div>
            <h4 className="c-primary font-semibold text-xl">Invoices</h4>
          </div>
          <div className="flex items-center justify-end gap-3">
            <div>
              <button className="c-primary py-2 px-5 border border-csecondary rounded-md bg-sidebar flex items-center gap-1">
                Filter <SlideIcon className="c-primary" />
              </button>
            </div>
            <div>
              <button className="bg-navlink py-2 c-inverted border border-[#60A5FA] px-5 rounded-md">
                Add Invoice
              </button>
            </div>
          </div>
        </div>
        <div>
          <Table headers={header} rows={rows} />
        </div>
      </div>
    </div>
  );
}
