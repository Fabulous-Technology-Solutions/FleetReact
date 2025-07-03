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
          path: "/dashboard",
          activePath: [],
        },
        {
          label: "Drivers & Employees",
          icon: DriversIcon,
          path: "",
          subItems: [
            {
              label: "All Team Members",
              path: "/all-team-members",
            },
            {
              label: "Attendance & Performance",
              path: "/attendance-and-performance",
            },
            {
              label: "Incident Reports",
              path: "/incident-reports",
            },
            {
              label: "Customers Management",
              path: "/customers-management",
            },
          ],
          activePath: [
            "/all-team-members",
            "/attendance-and-performance",
            "/incident-reports",
            "/customers-management",
          ],
        },
        {
          label: "Hiring & Onboarding",
          icon: HiringIcon,
          path: "",
          subItems: [
            {
              label: "Job Requests",
              path: "/job-requests",
            },
            {
              label: "Applications & Interviews",
              path: "/applications-and-interviews",
            },
          ],
          activePath: ["/job-requests", "/applications-and-interviews"],
        },
        {
          label: "Compliance & Documents",
          icon: DocumentsIcon,
          path: "/compliance-documents",
          activePath: [],
        },
        {
          label: "Fleet & Routes",
          icon: RoutesIcon,
          path: "",
          subItems: [
            {
              label: "Live Fleet Map",
              path: "/live-fleet-map",
            },
            {
              label: "Route Assignments",
              path: "/route-assignments",
            },
            {
              label: "Vehicle Maintenance",
              path: "/vehicle-maintenance",
            },
          ],
          activePath: ["/live-fleet-map", "/route-assignments", "/vehicle-maintenance"],
        },
        {
          label: "Finance",
          icon: RoutesIcon,
          path: "",
          subItems: [
            {
              label: "Payroll Overview",
              path: "/payroll-overview",
            },
            {
              label: "Invoices & Expenses",
              path: "/invoices-and-expenses",
            },
          ],
          activePath: ["/payroll-overview", "/invoices-and-expenses"],
        },
      ],
    },
    {
      title: "Settings",
      list: [
        {
          label: "Reports",
          icon: ReportsIcon,
          path: "/reports",
          activePath: [],
        },
        {
          label: "Settings",
          icon: SettingIcon,
          path: "",
          subItems: [
            {
              label: "Profile Settings",
              path: "/profile-setting",
            },
            {
              label: "Security Settings",
              path: "/security-settings",
            },
            {
              label: "User Roles & Permissions",
              path: "/user-roles-and-permissions",
            },
            {
              label: "Notification Preferences",
              path: "/notification-preferences",
            },
          ],
          activePath: ["/profile-setting", "/security-settings", "/user-roles-and-permissions", "/notification-preferences"],
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
