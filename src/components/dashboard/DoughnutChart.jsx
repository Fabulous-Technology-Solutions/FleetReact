import React from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Valid", value: 400 },
  { name: "Expiring Soon", value: 300 },
  { name: "Expired", value: 300 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  // Start of line: just outside outer radius
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;

  // End of line: just a few pixels further out
  const ex = cx + (outerRadius + 16) * cos;
  const ey = cy + (outerRadius + 16) * sin;

  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>

      {/* Main slice */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      {/* Active outline */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      {/* Small line */}
      <path d={`M${sx},${sy}L${ex},${ey}`} stroke={fill} fill="none" />

      {/* Optional circle at line end */}
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
  );
};

export default function DoughnutChart() {
  const COLORS = ["var(--navlinkbg)", "var(--cwarning)", "var(--cdanger)"];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={250} height={250}>
        <Pie
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={80}
          fill="red"
          dataKey="value"
          paddingAngle={5}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
