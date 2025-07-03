import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  DashboardIcon,
  DocumentsIcon,
  DriversIcon,
  HiringIcon,
  LogoutIcon,
  ReportsIcon,
  RoutesIcon,
} from "../CustomIcons";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import SettingIcon from "../CustomIcons/SettingIcon";

export default function AdminLayout() {
  const [showsidebar, setshowsidebar] = useState(false);

  const lists = [
    {
      title: "Main",
      list: [
        {
          label: "Dashboard",
          icon: DashboardIcon,
          path: "/Dashboard",
          activePath: [],
        },
        {
          label: "Drivers & Employees",
          icon: DriversIcon,
          path: "",
          subItems: [
            {
              label: "All Team Members",
              path: "/AllMembers",
            },
            {
              label: "Attendance & Performance",
              path: "/Attendance",
            },
            {
              label: "Incident Reports",
              path: "/IncidentReports",
            },
            {
              label: "Customers Management",
              path: "/CustomersManagement",
            },
          ],
          activePath: [
            "/AllMembers",
            "/Attendance",
            "/IncidentReports",
            "/CustomersManagement",
          ],
        },
        {
          label: "Hiring & Onboarding",
          icon: HiringIcon,
          path: "",
          subItems: [
            {
              label: "Job Requests",
              path: "/JobRequests",
            },
            {
              label: "Applications & Interviews",
              path: "/Interviews",
            },
          ],
          activePath: ["/JobRequests", "/Interviews"],
        },
        {
          label: "Compliance & Documents",
          icon: DocumentsIcon,
          path: "/Documents",
          activePath: [],
        },
        {
          label: "Fleet & Routes",
          icon: RoutesIcon,
          path: "",
          subItems: [
            {
              label: "Live Fleet Map",
              path: "/LiveMap",
            },
            {
              label: "Route Assignments",
              path: "/RouteAssignments",
            },
            {
              label: "Vehicle Maintenance",
              path: "/VehicleMaintenance",
            },
          ],
          activePath: ["/LiveMap", "/RouteAssignments", "/VehicleMaintenance"],
        },
        {
          label: "Finance",
          icon: RoutesIcon,
          path: "",
          subItems: [
            {
              label: "Payroll Overview",
              path: "/PayrollOverview",
            },
            {
              label: "Invoices & Expenses",
              path: "/InvoicesExpenses",
            },
          ],
          activePath: ["/PayrollOverview", "/InvoicesExpenses"],
        },
      ],
    },
    {
      title: "Settings",
      list: [
        {
          label: "Reports",
          icon: ReportsIcon,
          path: "/Reports",
          activePath: [],
        },
        {
          label: "Settings",
          icon: SettingIcon,
          path: "",
          subItems: [
            {
              label: "Profile Settings",
              path: "/ProfileSetting",
            },
            {
              label: "Security Settings",
              path: "/SecuritySettings",
            },
            {
              label: "User Roles & Permissions",
              path: "/UserRole",
            },
            {
              label: "Notification Preferences",
              path: "/Notification",
            },
          ],
          activePath: ["/ProfileSetting", "/SecuritySettings", "/UserRole", "/Notification"],
        },
        {
          label: "Log out",
          icon: LogoutIcon,
          path: "",
          activePath: [],
        },
      ],
    },
  ];

  return (
    <div className="bg-body flex justify-between h-[100vh] w-full p-3">
      <div
        className={`w-[250px] absolute sm:static z-[999] h-full left-0 top-0 sm:block ${
          showsidebar ? "block" : "hidden"
        }`}
      >
        <Sidebar lists={lists} />
      </div>
      <div className="w-full sm:w-[calc(100%-274px)]">
        <Navbar onBarClick={setshowsidebar} />
        <div className="w-full h-[calc(100vh-116px)] overflow-y-auto p-3 ps-0 mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
