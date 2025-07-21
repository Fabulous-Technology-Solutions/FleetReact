import React from "react";
import { statusStyles } from "../../modules/helpers";
import { GoDotFill } from "react-icons/go";
import TableMui from "../TableMui";

const BusCustomer = () => {
  const data = [
    {
      id: 1,
      location: "184 Griffin Street, Gilbert, AZ 85233",
      customerName: "ABC Logistics",
      company: "ABC Inc.",
      contactPerson: "Sarah Lin",
      email: "sarah@abc.com",
      phone: "(843) 461-5941",
      status: "In Active",
      action: "View Doc",
    },
    {
      id: 2,
      location: "184 Griffin Street, Gilbert, AZ 85233",
      customerName: "MovePro Ltd.",
      company: "MovePro",
      contactPerson: "Jason Roy",
      email: "jason@movepro.com",
      phone: "(920) 948-1722",
      status: "Active",
      action: "View Doc",
    },
    {
      id: 3,
      location: "184 Griffin Street, Gilbert, AZ 85233",
      customerName: "TransFleet",
      company: "TransCorp",
      contactPerson: "Emily Shaw",
      email: "emily@transcorp.io",
      phone: "(518) 744-6291",
      status: "Active",
      action: "View Doc",
    },
    {
      id: 4,
      location: "184 Griffin Street, Gilbert, AZ 85233",
      customerName: "FleetXpress",
      company: "FleetXpress LLC",
      contactPerson: "Daniel Kim",
      email: "daniel@fleetxpress.io",
      phone: "(917) 339-6416",
      status: "In Active",
      action: "View Doc",
    },
    {
      id: 5,
      location: "184 Griffin Street, Gilbert, AZ 85233",
      customerName: "MetroMove",
      company: "MetroMove Inc.",
      contactPerson: "Jessica Lee",
      email: "jessica@metronove.com",
      phone: "(401) 715-3344",
      status: "Active",
      action: "View Doc",
    },
    {
      id: 6,
      location: "184 Griffin Street, Gilbert, AZ 85233",
      customerName: "GoHaul Freight",
      company: "GoHaul Logistics",
      contactPerson: "Aaron Phillips",
      email: "aaron@gohauffreight.com",
      phone: "(636) 296-7838",
      status: "Active",
      action: "View Doc",
    },
    {
      id: 7,
      location: "184 Griffin Street, Gilbert, AZ 85233",
      customerName: "SwiftTransit",
      company: "Swift Transit Ltd.",
      contactPerson: "Priya Nair",
      email: "priya@swifttransit.net",
      phone: "(765) 322-1399",
      status: "In Active",
      action: "View Doc",
    },
  ];

  return (
    <div className="my-3">
      <TableMui
        loading={false}
        th={{
          customerName: "Customer Name",
          company: "Company",
          contactPerson: "Contact Person",
          location: "Location",
          email: "Email",
          phone: "Phone",
          status: "Status",
          action: "",
        }}
        td={data}
        customFields={[
          {
            name: "status",
            data: (value) => {
              const styles = statusStyles[value] || {
                text: "text-gray-500",
                bg: "bg-gray-100",
              };
              return (
                <div
                  className={`inline-flex gap-2 items-center rounded-full py-1 px-3 ${styles.text} ${styles.bg}`}
                >
                  <GoDotFill />
                  <span>{value}</span>
                </div>
              );
            },
          },
          {
            name: "action",
            data: (value) => (
              <button className="">
                View Details
              </button>
            ),
          },
        ]}
      />
    </div>
  );
};

export default BusCustomer;
