import React from "react";
import LineChartBox from "../../../components/dashboard/LineChartBox";
import BarChartComp from "../../../components/dashboard/BarChartComp";

export default function Reports() {
  const cards = [
    {
      title: "Fleet Efficiency",
      value: "87%",
      days: "Last 30 days",
      list: "Overall efficiency based on distance, idle time, and fuel usage.",
    },
    {
      title: "Driver Performance",
      value: "92%",
      days: "Last 30 days",
      list: "Average driver rating based on punctuality, safety, and feedback.",
    },
    {
      title: "Maintenance Cost",
      value: "$3,240",
      days: "Last 30 days",
      list: "Total amount spent on fleet maintenance.",
    },
  ];
  const data = [
    {
      name: "Jan",
      pv: 2400,
    },
    {
      name: "Fab",
      pv: 1398,
    },
    {
      name: "Mar",
      pv: 9800,
    },
    {
      name: "Apr",
      pv: 3908,
    },
    {
      name: "May",
      pv: 4800,
    },
    {
      name: "Jun",
      pv: 3800,
    },
  ];

  const dataCost = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Fab",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Aug",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Sep",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Oct",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Nov",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Dec",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
  const LineChartData = [
    {
      name: "Route A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Route B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Route C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Route D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Route E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Route F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Route G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 rounded-[16px] bg-cardcontainer flex flex-col justify-between h-full"
          >
            <p className="c-secondary text-sm">{card.title}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              <p className="text-sm c-secondary">{card.days}</p>
            </div>
            <p className="c-secondary text-xs mt-3">{card.list}</p>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4">
        <div className="lg:col-span-2">
          <LineChartBox data={LineChartData} dashboard={false} />
        </div>
        <div className="p-4 rounded-[16px] bg-cardcontainer flex flex-col justify-between h-full">
          <div>
            <h5 className="c-primary font-semibold">Fuel Consumption</h5>
          </div>
          <div className="h-[250px] mt-4">
            <BarChartComp data={data} radius={[10, 10, 10, 10]} />
          </div>
        </div>
      </div>
      <div className="p-4 rounded-[16px] bg-cardcontainer flex flex-col justify-between h-full mt-4">
        <div>
          <h5 className="c-primary">Monthly Maintenance Cost</h5>
        </div>
        <div className="h-[250px] mt-3">
          <BarChartComp
            data={dataCost}
            barSize={5}
            colors={["var(--cdanger)", "var(--csecondary)", "var(--cinverted)"]}
          />
        </div>
      </div>
    </div>
  );
}
