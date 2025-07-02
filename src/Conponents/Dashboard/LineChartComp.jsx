import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LineChartComp({ data, dashboard = false }) {
  const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width="20"
        height="20"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="24" fill="white" />

        <circle cx="32" cy="32" r="16" fill="black" />

        <circle cx="32" cy="32" r="8" fill="#d9d9d9" />
      </svg>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Line
          type={dashboard ? "linear" : "monotone"}
          dataKey="pv"
          stroke={dashboard ? "var(--csuccess)" : "var(--navlinkbg)"}
          dot={dashboard ? <CustomizedDot /> : false}
        />
        <Line
          type={dashboard ? "linear" : "monotone"}
          dataKey="uv"
          stroke={dashboard ? "var(--catblue)" : "white"}
          dot={false}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
