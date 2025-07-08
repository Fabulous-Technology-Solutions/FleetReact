import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AllTeamMembers from "./pages/admin/driversAndEmployees/AllTeamMembers";
import AttendanceAndPerformance from "./pages/admin/driversAndEmployees/AttendanceAndPerformance";
import IncidentReports from "./pages/admin/driversAndEmployees/IncidentReports";
import CustomersManagement from "./pages/admin/driversAndEmployees/CustomersManagement";
import ApplicationsAndInterviews from "./pages/admin/hiringAndOnboarding/ApplicationsAndInterviews";
import JobRequests from "./pages/admin/hiringAndOnboarding/JobRequests";
import ComplianceAndDocuments from "./pages/admin/complianceAndDocuments/ComplianceAndDocuments";
import LiveFleetMap from "./pages/admin/fleetsAndRoutes/LiveFleetMap";
import RouteAssignments from "./pages/admin/fleetsAndRoutes/RouteAssignments";
import VehicleMaintenance from "./pages/admin/fleetsAndRoutes/VehicleMaintenance";
import PayrollOverview from "./pages/admin/finance/PayrollOverview";
import InvoicesAndExpenses from "./pages/admin/finance/InvoicesAndExpenses";
import Reports from "./pages/admin/reports/Reports";
import { ProfileSettings } from "./pages/admin/settings/ProfileSettings";
import SecuritySettings from "./pages/admin/settings/SecuritySettings";
import UserRolesAndPermissions from "./pages/admin/settings/UserRolesAndPermissions";
import NotificationPreference from "./pages/admin//settings/NotificationPreference";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ForgetPassword from "./pages/auth/ForgetPassword";
import CheckEmail from "./pages/auth/CheckEmail";
import CreatePassword from "./pages/auth/CreatePassword";
import PasswordReset from "./pages/auth/PasswordReset";
import LandingPageLayout from "./layouts/LandingPageLayout";
import LandingPage from "./pages/LandingPage";
import SuperAdminDashboard from "./pages/superAdmin/SuperAdminDashboard";
import CompaniesAndUsers from "./pages/superAdmin/CompaniesAndUsers";
import SubscriptionAndBillings from "./pages/superAdmin/SubscriptionAndBillings";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<LandingPageLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/all-team-members" element={<AllTeamMembers />} />
            <Route path="/attendance-and-performance" element={<AttendanceAndPerformance />} />
            <Route path="/incident-reports" element={<IncidentReports />} />
            <Route path="/customers-management" element={<CustomersManagement />} />
            <Route path="/job-requests" element={<JobRequests />} />
            <Route path="/applications-and-interviews" element={<ApplicationsAndInterviews />} />
            <Route path="/compliance-documents" element={<ComplianceAndDocuments />} />
            <Route path="/live-fleet-map" element={<LiveFleetMap />} />
            <Route path="/route-assignments" element={<RouteAssignments />} />
            <Route path="/vehicle-maintenance" element={<VehicleMaintenance />} />
            <Route path="/payroll-overview" element={<PayrollOverview />} />
            <Route path="/invoices-and-expenses" element={<InvoicesAndExpenses />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile-setting" element={<ProfileSettings />} />
            <Route path="/security-settings" element={<SecuritySettings />} />
            <Route path="/user-roles-and-permissions" element={<UserRolesAndPermissions />} />
            <Route path="/notification-preferences" element={<NotificationPreference />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<SuperAdminDashboard />} />
            <Route path="/admin/companies-and-users" element={<CompaniesAndUsers />} />
            <Route path="/admin/subscription-and-billings" element={<SubscriptionAndBillings />} />
            <Route path="/admin/profile-setting" element={<ProfileSettings />} />
            <Route path="/admin/security-settings" element={<SecuritySettings />} />
            <Route path="/admin/notification-preferences" element={<NotificationPreference />} />
          </Route>

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
