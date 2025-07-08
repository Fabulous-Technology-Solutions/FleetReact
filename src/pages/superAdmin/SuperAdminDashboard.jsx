import React, { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import DashboardChart from "../../components/dashboard/DashboardChart";
import DoughnutChart from "../../components/dashboard/DoughnutChart";
import { Avatar } from "@mui/material";
import { statusStyles } from "../../modules/helpers";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { FiltersIcon } from "../../CustomIcons";
import TableMui from "../../components/TableMui";
import { GoDotFill } from "react-icons/go";
import CompanyModal from "../../components/modals/CompanyModal";

const SuperAdminDashboard = () => {
  const [show, setShow] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const cards = [
    {
      title: "Total Registered Companies",
      value: "1,200",
      percentage: "+101%",
    },
    { title: "Total Users", value: "10,000", percentage: "+101%" },
    {
      title: "Total Revenue (All Time)",
      value: "$856,000",
      percentage: "+101%",
    },
    { title: "Active Subscriptions", value: "15,900" },
  ];
  const monthlyRevenue = [
    { month: "Jan", revenue: 0 },
    { month: "Feb", revenue: 20 },
    { month: "Mar", revenue: 40 },
    { month: "Apr", revenue: 20 },
    { month: "May", revenue: 60 },
    { month: "Jun", revenue: 50 }, // Or use 18 if $18k is the real value
    { month: "Jul", revenue: 80 },
    { month: "Aug", revenue: 60 },
    { month: "Sep", revenue: 40 },
    { month: "Oct", revenue: 20 },
    { month: "Nov", revenue: 0 },
    { month: "Dec", revenue: 20 },
  ];
  const data = {
    labels: ["Valid", "Expiring Soon", "Expired"],
    datasets: [
      {
        label: "Compliance Status",
        data: [60, 25, 15],
        backgroundColor: ["#0058E8", "#FACC15", "#F43F5E"],
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };
  const tableData = [
    {
      id: 1,
      name: "James Hall",
      role: "25",
      email: "olivia@untitledui.com",
      status: "Active",
      checkerStatus: "Jun 26, 2025 5:45 am",
      lastActive: "1h ago",
    },
    {
      id: 2,
      name: "Paula Mora",
      role: "23",
      email: "phoenix@untitledui.com",
      status: "Active",
      checkerStatus: "Jun 26, 2025 5:45 am",
      lastActive: "2 days ago",
    },
    {
      id: 3,
      name: "Ricky Smith",
      role: "24",
      email: "lanag@untitledui.com",
      status: "Active",
      checkerStatus: "Jun 26, 2025 5:45 am",
      lastActive: "3h ago",
    },
    {
      id: 4,
      name: "Kimberly",
      role: "25",
      email: "demi@untitledui.com",
      status: "Active",
      checkerStatus: "Jun 26, 2025 5:45 am",
      lastActive: "1h ago",
    },
    {
      id: 5,
      name: "David Elson",
      role: "24",
      email: "candice@untitledui.com",
      status: "Active",
      checkerStatus: "Jun 26, 2025 5:45 am",
      lastActive: "3h ago",
    },
    {
      id: 6,
      name: "Mary Freund",
      role: "25",
      email: "natali@untitledui.com",
      status: "Active",
      checkerStatus: "Jun 26, 2025 5:45 am",
      lastActive: "6h ago",
    },
    {
      id: 7,
      name: "Jerry Helfer",
      role: "25",
      email: "drew@untitledui.com",
      status: "Active",
      checkerStatus: "Jun 26, 2025 5:45 am",
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
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              {card.percentage ? (
                <div className="flex items-center gap-2">
                  <p className="text-sm c-secondary">{card.percentage}</p>
                  <FaArrowTrendUp className="c-secondary" />
                </div>
              ) : (
                <div className=""></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="col-span-2 bg-cardcontainer rounded-2xl p-4">
          <div className="flex justify-between flex-wrap gap-3">
            <h5 className="text-xl c-primary">Earnings Revenue</h5>
            <select name="" id="" className="c-primary border rounded">
              <option value="30" selected>
                Last 30 days
              </option>
              <option value="7" selected>
                Last 7 days
              </option>
              <option value="14" selected>
                Last 14 days
              </option>
            </select>
          </div>
          <div className="h-[250px]">
            <DashboardChart
              borderColor="#0058E8"
              color="#0058E8"
              gradientId={1}
              data={monthlyRevenue}
            />
          </div>
        </div>
        <div className="bg-cardcontainer rounded-2xl p-4 lg:col-span-1 col-span-2">
          <div className="flex items-center gap-x-4 gap-y-2 justify-between flex-wrap">
            <p className="c-primary text-sm font-semibold">
              Subscription Status
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 justify-between mt-4">
            <div className="size-100 h-[180px]">
              <DoughnutChart data={data} />
            </div>
            <div className="flex-1 w-full min-[480px]:max-w-[250px]">
              <div className="flex flex-col gap-4">
                {data.datasets[0].backgroundColor.map((color, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="size-2 rounded-full"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="flex flex-1 items-center gap-4 justify-between">
                      <p className="c-primary text-xs">{data.labels[index]}</p>
                      <p className="c-primary text-xs">
                        ({data.datasets[0].data[index]}%)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-cardcontainer p-4 rounded-2xl">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">New Company & User</p>
          <div className="flex items-center gap-2 ms-auto flex-wrap justify-end">
            <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              <span>Filters</span>
              <FiltersIcon className="text-lg" />
            </button>
            <button
              className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]"
              onClick={() => {
                setModalMode("add");
                setShow(true);
              }}
            >
              Add New Company
            </button>
          </div>
        </div>
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              name: "User Name",
              email: "Email",
              role: "Subscription Plan",
              status: "Status",
              checkerStatus: "Date",
              action: "",
            }}
            td={tableData}
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
      {show && (
        <CompanyModal
          show={show}
          onHide={() => setShow(false)}
          modalMode={modalMode}
        />
      )}
    </div>
  );
};

export default SuperAdminDashboard;
