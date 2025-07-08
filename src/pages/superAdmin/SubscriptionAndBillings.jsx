import React from 'react'
import TableMui from '../../components/TableMui';
import { Avatar } from '@mui/material';
import { statusStyles } from '../../modules/helpers';
import { GoDotFill } from 'react-icons/go';

const SubscriptionAndBillings = () => {
  const data = [
  {
    id: 1, // Added for unique key in React
    userName: "Rodger Struck",
    planType: "Pro",
    billingCycle: "Monthly",
    nextBillingDate: "Jan 12, 2024",
    amount: "$12,000",
    status: "Active"
  },
  {
    id: 2,
    userName: "Chris Gasser",
    planType: "Pro",
    billingCycle: "Bi-Monthly",
    nextBillingDate: "Jan 12, 2024",
    amount: "$12,000",
    status: "Expiring"
  },
  {
    id: 3,
    userName: "Dennis Callis",
    planType: "Pro",
    billingCycle: "Bi-Yearly",
    nextBillingDate: "Jan 12, 2024",
    amount: "$12,000",
    status: "Active"
  },
  {
    id: 4,
    userName: "Kimberly Mastrangelo",
    planType: "Pro",
    billingCycle: "Yearly",
    nextBillingDate: "Jan 12, 2024",
    amount: "$12,000",
    status: "Active"
  },
  {
    id: 5,
    userName: "Patricia Sanders",
    planType: "Pro",
    billingCycle: "Yearly",
    nextBillingDate: "Jan 12, 2024",
    amount: "$12,000",
    status: "Active"
  },
  {
    id: 6,
    userName: "Bradley Lawlor",
    planType: "Pro",
    billingCycle: "Yearly",
    nextBillingDate: "Jan 12, 2024",
    amount: "$12,000",
    status: "Active"
  },
  {
    id: 7,
    userName: "Iva Ryan",
    planType: "Pro",
    billingCycle: "Yearly",
    nextBillingDate: "Jan 12, 2024",
    amount: "$12,000",
    status: "Active"
  }
];
  return (
    <div>
          <div className="mt-4 bg-cardcontainer p-4 rounded-2xl">
            <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
              <p className="c-primary text-sm font-semibold">Subscription & Billings</p>
            </div>
            <div className="my-3">
              <TableMui
                loading={false}
                th={{
                  userName: "User Name",
                  planType: "Plan Type",
                  billingCycle: "Billing Cycle",
                  nextBillingDate: "Next Billing Date",
                  amount: "Amount",
                  status: "Status",
                }}
                td={data}
                customFields={[
                  {
                    name: "userName",
                    data: (value) => {
                      return (
                        <div className={`inline-flex gap-2 items-center `}>
                          <Avatar />
                          {value}
                        </div>
                      );
                    },
                  },
                  {
                    name: "status",
                    data: (value) => {
                      const styles = statusStyles[value] || {
                        text: "text-gray-400",
                        bg: "bg-gray-100",
                      };
                      return (
                        <div
                          className={`inline-flex gap-2 items-center rounded-full py-1 px-3 ${styles.text} ${styles.bg}`}
                        >
                          <GoDotFill />
                          {value}
                        </div>
                      );
                    },
                  },
                ]}
              />
            </div>
          </div>
        </div>
  )
}

export default SubscriptionAndBillings