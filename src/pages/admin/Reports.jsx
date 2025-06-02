import React from 'react'
import LineChartBox from '../../Conponents/Dashboard/LineChartBox';
import BarChart from '../../Conponents/Dashboard/BarChart';

export default function Reports() {
  const cards = [
    { title: "Fleet Efficiency", value: "87%", days: 'Last 30 days', list: 'Overall efficiency based on distance, idle time, and fuel usage.' },
    { title: "Driver Performance", value: "92%", days: 'Last 30 days', list: 'Average driver rating based on punctuality, safety, and feedback.' },
    { title: "Maintenance Cost", value: "$3,240", days: 'Last 30 days', list: 'Total amount spent on fleet maintenance.' },
  ];
  const labels = ["Jan", "Fab", "Mar", "Apr", "May",];
  const data = {
    labels,
    datasets: [
      {
        label: "Fuel Consumption",
        data: [30, 10, 30, 10, 20, 20,],
        backgroundColor: "#0058E8",
        barThickness: 30,
        borderRadius: 10
      },
    ],
  }

  const labelsCost = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dataCost = {
    labels: labelsCost,
    datasets: [
      {
        label: "Maintenance Cost",
        data: [30, 40, 30, 10, 20, 20,30, 10, 30, 10, 20, 20,],
        backgroundColor: "#F43F5E",
        barThickness:2,
        borderRadius: 10
      },

      {
        label: "Maintenance Cost",
        data: [30, 10, 30, 10, 20, 20,30, 10, 30, 10, 20, 20,],
        backgroundColor: "#6B7280",
        barThickness:2,
        borderRadius: 10
      },

      {
        label: "Maintenance Cost",
        data: [30, 80, 30, 10, 20, 20,30, 10, 30, 10, 20, 20,],
        backgroundColor: "#9CA3AF",
        barThickness:2,
        borderRadius: 10
      },

    ],
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="border border-main p-4 rounded-[16px] bg-sidebar flex flex-col justify-between h-full">
            <p className="c-secondary text-sm">{card.title}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-semibold c-primary">{card.value}</p>
              <p className="text-sm c-secondary">{card.days}</p>
            </div>
            <p className="c-secondary text-xs mt-3">{card.list}</p>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-2 mt-4">
        <div className='lg:col-span-2'>
          <LineChartBox />
        </div>
        <div className='border border-main p-4 rounded-[16px] bg-sidebar flex flex-col justify-between h-full'>
          <div>
            <h5 className='c-primary font-semibold'>Fuel Consumption</h5>
          </div>
          <div className='h-[250px] mt-4'>
            <BarChart data={data} />
          </div>
        </div>
      </div>
      <div className='border border-main p-4 rounded-[16px] bg-sidebar flex flex-col justify-between h-full mt-5'>
        <div>
          <h5 className='c-primary'>Monthly Maintenance Cost</h5>
        </div>
        <div className='h-[250px] mt-3'>
          <BarChart data={dataCost} />
        </div>
      </div>
    </div>
  )
}
