import React, { useState } from "react";
import { FiltersIcon } from "../../CustomIcons";
import FleetCustomer from "../../Conponents/customerManagement/FleetCustomer";
import BusCustomer from "../../Conponents/customerManagement/BusCustomer";
import CustomTabs from "../../Conponents/CustomTabs";

export default function CustomersManagement() {
   const [value, setValue] = useState(0);
  const navigateToTab = (tabIndex) => {
    setValue(tabIndex);
  };
  const tabLabels = ["Fleet Customer", "Bus Customer"];
  const tabPanels = [
    <FleetCustomer navigateToTab={navigateToTab} />,
    <BusCustomer navigateToTab={navigateToTab} />,
  ];
  const cards = [
    { title: "Total Customers", value: "125", desc: "Active Accounts" },
    { title: "New Customers", value: "18", desc: "Compared to last month" },
    { title: "Avg. Jobs per Customer", value: "4.2", desc: "Past 30 days" },
    { title: "Satisfaction Rate", value: "94%" },
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
            <div className="flex items-center gap-2 justify-between flex-wrap mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              {card.desc && (
                <p className="text-xs c-secondary ms-auto">{card.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-sidebar border border-main rounded-[12px] overflow-hidden">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">Customer Directory</p>
          <div className="flex items-center gap-2 ms-auto flex-wrap justify-end">
            <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              <span>Filters</span>
              <FiltersIcon className="text-lg" />
            </button>
            <button className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]">
              Add New Member
            </button>
          </div>
        </div>
        <div>
          <CustomTabs
              tabs={tabLabels}
              panels={tabPanels}
              setValue={setValue}
              value={value}
            />
        </div>
      </div>
    </div>
  );
}
