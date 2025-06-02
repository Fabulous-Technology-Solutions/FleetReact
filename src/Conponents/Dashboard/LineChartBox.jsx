import React from "react";
import LineCart from "./LineCart";

export default function LineChartBox() {
  const labels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Actual Timings",
        data: [30, 60, 40, 50, 60, 70],
        borderColor: "#22C55E",
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "Planned",
        data: [60, 30, 50, 40, 70, 60],
        borderColor: "#60A5FA",
        borderDash: [5, 5],
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="border border-main p-4 rounded-[16px] bg-sidebar flex flex-col justify-between h-full">
      <div className="flex items-center gap-x-4 gap-y-2 justify-between flex-wrap">
        <p className="c-primary text-sm font-semibold">Route Efficiency</p>
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
        <LineCart data={data} />
      </div>
    </div>
  );
}
