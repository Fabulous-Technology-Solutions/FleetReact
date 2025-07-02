import React from "react";
import LineChartComp from "./LineChartComp";

export default function LineChartBox({ data, dashboard = true }) {
  const dashboardData = [
    {
      name: "Day 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Day 2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Day 3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Day 4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Day 5",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Day 6",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Day 7",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const datasets = [
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
  ];
  return (
    <div className="p-4 rounded-[16px] bg-cardcontainer flex flex-col justify-between h-full">
      <div className="flex items-center gap-x-4 gap-y-2 justify-between flex-wrap">
        <p className="c-primary text-sm font-semibold">Route Efficiency</p>
        <div className="flex items-center gap-2 ms-auto">
          {datasets.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="size-2 rounded-full"
                style={{ backgroundColor: item.borderColor }}
              ></div>
              <p className="c-secondary text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[250px] mt-4">
        <LineChartComp data={data || dashboardData} dashboard={dashboard} />
      </div>
    </div>
  );
}
