import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext";
import AdminLayout from "./layouts/AdminLayout";
import IconGallery from "./components/IconGallery";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AllMembers from "./pages/admin/driversAndEmployees/AllMembers";
import Attendance from "./pages/admin/driversAndEmployees/Attendance";
import IncidentReports from "./pages/admin/driversAndEmployees/IncidentReports";
import CustomersManagement from "./pages/admin/driversAndEmployees/CustomersManagement";
import Interviews from "./pages/admin/hiringAndOnboarding/Interviews";
import JobRequests from "./pages/admin/hiringAndOnboarding/JobRequests";
import Documents from "./pages/admin/complianceAndDocuments/Documents";
import LiveMap from "./pages/admin/fleetsAndRoutes/LiveMap";
import RouteAssignments from "./pages/admin/fleetsAndRoutes/RouteAssignments";
import VehicleMaintenance from "./pages/admin/fleetsAndRoutes/VehicleMaintenance";
import PayrollOverview from "./pages/admin/finance/PayrollOverview";
import InvoicesExpenses from "./pages/admin/finance/InvoicesExpenses";
import Reports from "./pages/admin/reports/Reports";
import { ProfileSetting } from "./pages/admin/settings/ProfileSetting";
import SecuritySettings from "./pages/admin/settings/SecuritySettings";
import UserRole from "./pages/admin/settings/UserRole";
import NotificationPreference from "./pages/admin//settings/NotificationPreference";

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
