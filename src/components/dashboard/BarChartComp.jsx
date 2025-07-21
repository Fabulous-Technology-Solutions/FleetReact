import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarChartComp({
  data,
  radius = [0, 0, 0, 0],
  barSize = "50",
  colors,
  dashboard = false,
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={barSize}
        backgroudColor="transparent"
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--bgbody)", // dark background
            border: "none",
            borderRadius: "8px",
            color: "var(--cprimary)",
          }}
          labelStyle={{
            color: "var(--cprimary)", // white label text
          }}
          cursor={{ fill: "transparent" }} // optional: customize the hover bar background
        />

        <Bar
          dataKey="pv"
          stackId="a"
          fill={colors?.[0] || "var(--navlinkbg)"}
          radius={!dashboard ? radius : [0, 0, 0, 0]}
        />
        <Bar dataKey="uv" stackId="a" fill={colors?.[1] || "var(--cwarning)"} />
        <Bar
          dataKey="amt"
          stackId="a"
          fill={colors?.[2] || "var(--csuccess)"}
          radius={radius}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
