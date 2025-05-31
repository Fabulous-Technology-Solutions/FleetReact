import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Dashboard() {
  const cards = [
    { title: "Active Drivers", value: "80", percentage: "+11.01%" },
    { title: "On-Duty Vehicles", value: "85", percentage: "-0.03%" },
    { title: "Pending Compliance Docs", value: "8", percentage: "+15.03%" },
    { title: "Fleet Health Score", value: "92%" },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-main p-4 rounded-[16px] bg-sidebar flex flex-col justify-between h-full"
          >
            <p className="c-secondary text-sm">{card.title}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              {card.percentage ? (
                <div className="flex items-center gap-2">
                  <p className="text-sm c-secondary">+11.01%</p>
                  <FaArrowTrendUp className="c-secondary" />
                </div>
              ) : (
                <div className="size-3 rounded-full bg-navlink"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
