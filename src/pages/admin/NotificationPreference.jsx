import React from "react";
import ToggleSwitch from "../../Conponents/settings/ToggleSwitch";

const NotificationPreference = () => {
  const list = [
    { label: "Vehicle Maintenance Alerts", id: "VehicleMaintenance" },
    { label: "Route Assignment Updates", id: "RouteAssignment" },
    { label: "Driver Behavior Alerts", id: "DriverBehavior" },
    { label: "Fuel Consumption Threshold", id: "FuelConsumption" },
    { label: "Payroll Processing Notifications", id: "PayrollProcessing" },
    { label: "System Security Alerts", id: "SystemSecurity" },
  ];
  return (
    <div>
      <div className="max-w-4xl w-full mx-auto">
        <div>
          <p className="text-lg font-semibold c-primary">
            Notification Preferences
          </p>
          <div className="text-sm c-secondary">
            Customize how you'd like to receive alerts.
          </div>
        </div>
        <div className="mt-4 bg-cardcontainer rounded-[24px]">
          <div className="flex flex-col gap-10 p-6">
            {list.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 justify-between"
              >
                <label className="c-primary" htmlFor={item.id}>
                  {item.label}
                </label>
                <ToggleSwitch id={item.id} />
              </div>
            ))}
          </div>
          <div className="border-t border-main p-6 flex items-center gap-4 justify-end flex-wrap">
            <button className="c-primary gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              Cancel
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
              Update Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPreference;
