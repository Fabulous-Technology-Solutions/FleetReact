import React from "react";
import SlideIcon from "../../CustomIcons/SlideIcon";
import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { statusStyles } from "../../modules/helpers";
import TableMui from "../../Conponents/TableMui";

export default function InvoiceExpenses() {
  const cards = [
    { title: "Total Invoiced", value: "$47,800", days: "This month" },
    { title: "Total Expenses", value: "$47,800", days: "This month" },
    { title: "Outstanding Payments", value: "$12,300" },
    { title: "Paid Invoices", value: "26/34" },
  ];

  const data = [
    {
      id: 1,
      invoiceId: "INV-10023",
      vendor: "FastFuel Co.",
      category: "Fuel",
      dateIssued: "May 5, 2025",
      amount: "$3,500",
      status: "Paid",
      dueDate: "May 12",
    },
    {
      id: 2,
      invoiceId: "INV-10024",
      vendor: "AutoCare Center",
      category: "Maintenance",
      dateIssued: "May 7, 2025",
      amount: "$3,200",
      status: "Pending",
      dueDate: "May 15",
    },
    {
      id: 3,
      invoiceId: "INV-10025",
      vendor: "TrackSoft Inc.",
      category: "Software License",
      dateIssued: "May 10, 2025",
      amount: "$2,900",
      status: "Overdue",
      dueDate: "May 17",
    },
    {
      id: 4,
      invoiceId: "INV-10026",
      vendor: "Driver Supply Co.",
      category: "Uniforms",
      dateIssued: "May 9, 2025",
      amount: "$4,100",
      status: "Paid",
      dueDate: "May 20",
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
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              <p className="text-sm c-secondary">{card.days}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-main rounded-[16px] bg-sidebar mt-4">
        <div className="md:flex items-center justify-between p-4">
          <div>
            <h4 className="c-primary font-semibold text-xl">Invoices</h4>
          </div>
          <div className="flex items-center justify-end gap-3 md:mt-0 mt-3 flex-wrap">
            <div>
              <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
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
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              invoiceId: "Invoice ID",
              vendor: "Vendor Name",
              category: "Category",
              dateIssued: "Date Issued",
              amount: "Amount",
              status: "Status",
              dueDate: "Due Date",
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
