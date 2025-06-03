import React from 'react'
import SlideIcon from '../../CustomIcons/SlideIcon';
import Table from '../../Conponents/Table';

export default function InvoiceExpenses() {
  const cards = [
    { title: "Total Invoiced", value: "$47,800", days: "This month" },
    { title: "Total Expenses", value: "$47,800", days: "This month" },
    { title: "Outstanding Payments", value: "$12,300", },
    { title: "Paid Invoices", value: "26/34" },
  ];

  const header = ["Employee Name", "Role", "Department", "Pay Period", "Gross Pay", "Deductions", "Net Pay", "Status", ""]
  const rows = []
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="border border-main p-4 rounded-[16px] bg-sidebar flex flex-col justify-between h-full">
            <p className="c-secondary text-sm">{card.title}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              <p className="text-sm c-secondary">{card.days}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='border border-main rounded-[16px] bg-sidebar mt-4'>
        <div className='flex items-center justify-between p-4'>
          <div>
            <h4 className='c-primary font-semibold text-xl'>Payroll</h4>
          </div>
          <div className='flex items-center justify-end gap-3'>
            <div>
              <button className='c-primary py-2 px-5 border border-csecondary rounded-md bg-sidebar flex items-center gap-1'>Filter <SlideIcon className='c-primary' /></button>
            </div>
            <div>
              <button className='bg-navlink py-2 c-inverted border border-[#60A5FA] px-5 rounded-md'>Add Payroll Entry </button>
            </div>
          </div>
        </div>
        <div>
          <Table headers={header} rows={rows}/>
        </div>
      </div>
    </div>
  )
}
