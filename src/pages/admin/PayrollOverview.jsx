import React from 'react'
import SlideIcon from '../../CustomIcons/SlideIcon';

export default function PayrollOverview() {
  const cards = [
    { title: "Total Payroll", value: "$124,000", },
    { title: "Pending Payments", value: "$18,450", },
    { title: "Employees Paid", value: "124 / 140", },
    { title: "Next Payroll Date", value: "June 5, 2025" },
  ];

  const header = ["Employee Name", "Role", "Department", "Pay Period", "Gross Pay", "Deductions", "Net Pay", "Status", ""]

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
      <div className='border border-main rounded-[16px] bg-sidebar p-4 mt-4'>
          <div className='flex items-center justify-between'>
              <div>
                <h4 className='c-primary font-semibold text-xl'>Payroll</h4>
              </div>
              <div className='flex items-center justify-end gap-3'>
                <div>
                  <button className='c-primary py-2 px-5 border border-csecondary rounded-md bg-sidebar flex items-center gap-1'>Filter <SlideIcon className='c-primary'/></button>
                </div>
                <div>
                  <button className='bg-navlink py-2 c-inverted border border-[#60A5FA] px-5 rounded-md'>Add Payroll Entry </button>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
