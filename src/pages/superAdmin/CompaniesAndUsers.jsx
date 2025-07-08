import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { statusStyles } from "../../modules/helpers";
import { Avatar } from "@mui/material";
import TableMui from "../../components/TableMui";
import { FiltersIcon } from "../../CustomIcons";
import CompanyModal from "../../components/modals/CompanyModal";

const CompaniesAndUsers = () => {
  const [show, setShow] = useState(false);
  const [modalMode, setModalMode] = useState("add");
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

export default CompaniesAndUsers;
