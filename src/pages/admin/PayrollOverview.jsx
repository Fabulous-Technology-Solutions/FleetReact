import React from 'react'

export default function PayrollOverview() {
  const cards = [
    { title: "Total Payroll", value: "$124,000", },
    { title: "Pending Payments", value: "$18,450", },
    { title: "Employees Paid", value: "124 / 140", },
    { title: "Next Payroll Date", value: "June 5, 2025" },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="border border-main p-4 rounded-[16px] bg-sidebar flex flex-col justify-between h-full">
            <p className="c-secondary text-sm">{card.title}</p>
            <p className="text-xl font-semibold c-primary mt-2">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
