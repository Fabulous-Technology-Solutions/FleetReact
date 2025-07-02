import React from "react";
import BarChartComp from "./BarChartComp";

export default function BarChartBox() {
  const data = [
    {
      name: 'Week 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Week 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Week 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Week 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Week 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Week 6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
 const  datasets= [
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
    ]
  
  return (
    <div className="p-4 rounded-[16px] bg-cardcontainer flex flex-col justify-between h-full">
      <div className="flex items-center gap-x-4 gap-y-2 justify-between flex-wrap">
        <p className="c-primary text-sm font-semibold">
          Fleet Performance Overview
        </p>
        <div className="flex items-center gap-2 ms-auto">
          {datasets.map((item, index) => (
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
        <BarChartComp data={data} radius={[10, 10, 0, 0]} dashboard={true} />
      </div>
    </div>
  );
}
