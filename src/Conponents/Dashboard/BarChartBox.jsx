import React from "react";
import BarChart from "./BarChart";

export default function BarChartBox() {
  const labels = ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6"];

  const data = {
    labels,
    datasets: [
      {
        label: "Van",
        data: [30, 10, 30, 10, 20, 20, 20],
        backgroundColor: "#0058E8",
        barThickness: 30,
      },
      {
        label: "Bus",
        data: [10, 10, 20, 10, 10, 20, 20],
        backgroundColor: "#FACC15",
        barThickness: 30,
      },
      {
        label: "Truck",
        data: [10, 30, 20, 20, 10, 20, 20],
        backgroundColor: "#22C55E",
        barThickness: 30,
        borderRadius: 10,
      },
    ],
  };
  return (
    <div className="p-4 rounded-[16px] bg-cardcontainer flex flex-col justify-between h-full">
      <div className="flex items-center gap-x-4 gap-y-2 justify-between flex-wrap">
        <p className="c-primary text-sm font-semibold">
          Fleet Performance Overview
        </p>
        <div className="flex items-center gap-2 ms-auto">
          {data.datasets.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="size-2 rounded-full"
                style={{ backgroundColor: item.backgroundColor }}
              ></div>
              <p className="c-secondary text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[250px] mt-4">
        <BarChart data={data} />
      </div>
    </div>
  );
}
