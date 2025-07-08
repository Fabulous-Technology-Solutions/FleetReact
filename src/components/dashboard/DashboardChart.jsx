import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";

const DashboardChart = ({
  borderColor,
  color,
  width,
  gradientId,
  areaChartData,
  data,
}) => {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          // width={'100%'}
          height={400}
          data={areaChartData ? areaChartData : data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />
          <Tooltip
            formatter={(value) => [`$${value}`, "Revenue"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <XAxis dataKey="month" axisLine={{ strokeOpacity: 0 }} />
          <YAxis axisLine={{ strokeOpacity: 0 }} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke={borderColor}
            fill={`url(#${gradientId})`}
            strokeWidth={0}
          />
        </AreaChart>
      </ResponsiveContainer>
  );
};

export default DashboardChart;
