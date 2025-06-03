import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import IconGallery from "./Conponents/IconGallery";
import Dashboard from "./pages/admin/Dashboard";
import AllMembers from "./pages/admin/AllMembers";
import Attendance from "./pages/admin/Attendance";
import IncidentReports from "./pages/admin/IncidentReports";
import CustomersManagement from "./pages/admin/CustomersManagement";
import Interviews from "./pages/admin/Interviews";
import JobRequests from "./pages/admin/JobRequests";
import Documents from "./pages/admin/Documents";
import LiveMap from "./pages/admin/LiveMap";
import RouteAssignments from "./pages/admin/RouteAssignments";
import VehicleMaintenance from "./pages/admin/VehicleMaintenance";
import PayrollOverview from "./pages/admin/PayrollOverview";
import InvoicesExpenses from "./pages/admin/InvoicesExpenses";
import Reports from "./pages/admin/Reports";
import AccountSettings from "./pages/admin/AccountSettings";
import { ThemeProvider } from "./theme/ThemeContext";
import { ProfileSetting } from "./pages/admin/ProfileSetting";
import SecuritySettings from "./pages/admin/SecuritySettings";
import UserRole from "./pages/admin/UserRole";
import NotificationPreference from "./pages/admin/NotificationPreference";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/icons" element={<IconGallery />} />
          <Route element={<AdminLayout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/AllMembers" element={<AllMembers />} />
            <Route path="/Attendance" element={<Attendance />} />
            <Route path="/IncidentReports" element={<IncidentReports />} />
            <Route path="/JobRequests" element={<JobRequests />} />
            <Route path="/Interviews" element={<Interviews />} />
            <Route path="/Documents" element={<Documents />} />
            <Route path="/LiveMap" element={<LiveMap />} />
            <Route path="/RouteAssignments" element={<RouteAssignments />} />
            <Route path="/VehicleMaintenance" element={<VehicleMaintenance />}/>
            <Route path="/PayrollOverview" element={<PayrollOverview />} />
            <Route path="/InvoicesExpenses" element={<InvoicesExpenses />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/AccountSettings" element={<AccountSettings />} />
            <Route path="/ProfileSetting" element={<ProfileSetting />} />
            <Route path="/SecuritySettings" element={<SecuritySettings />} />
            <Route path="/UserRole" element={<UserRole />} />
            <Route path="/Notification" element={<NotificationPreference />} />
            <Route
              path="/CustomersManagement"
              element={<CustomersManagement />}
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
