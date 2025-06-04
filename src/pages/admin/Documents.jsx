import React from "react";
import CompliantOne from "../../assets/images/comliant1.png";
import { GoDotFill } from "react-icons/go";

export default function Documents() {
  const cards = [
    { title: "Documents Expiring Soon", value: "9" },
    { title: "Incomplete Profiles", value: "6" },
    { title: "Pending Verifications", value: "4" },
    { title: "Total Documents", value: "314" },
  ];

  const compliant = [
    {
      comImg: CompliantOne,
      compliantCard: "Compliant",
      title: "Driver's License - John Doe",
      state: "California",
      expire: "Feb 1, 2025",
    },
    {
      comImg: CompliantOne,
      compliantCard: "Non-compliant",
      title: "Driver's License - John Doe",
      state: "California",
      expire: "Feb 1, 2025",
    },
    {
      comImg: CompliantOne,
      compliantCard: "Compliant",
      title: "Driver's License - John Doe",
      state: "California",
      expire: "Feb 1, 2025",
    },
    {
      comImg: CompliantOne,
      compliantCard: "Pending",
      title: "Driver's License - John Doe",
      state: "California",
      expire: "Feb 1, 2025",
    },
    {
      comImg: CompliantOne,
      compliantCard: "Non-compliant",
      title: "Driver's License - John Doe",
      state: "California",
      expire: "Feb 1, 2025",
    },
    {
      comImg: CompliantOne,
      compliantCard: "Compliant",
      title: "Driver's License - John Doe",
      state: "California",
      expire: "Feb 1, 2025",
    },
    {
      comImg: CompliantOne,
      compliantCard: "Pending",
      title: "Driver's License - John Doe",
      state: "California",
      expire: "Feb 1, 2025",
    },
  ];

  const getColor = (status) => {
    switch (status) {
      case "Compliant":
        return "bg-[#22C55E]";
      case "Non-compliant":
        return "bg-[#F43F5E]";
      case "Pending":
        return "bg-[#FACC15]";
      default:
        return "";
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 rounded-[16px] bg-cardcontainer flex flex-col justify-between h-full"
          >
            <p className="c-secondary text-sm">{card.title}</p>
            <p className="text-xl font-semibold c-primary mt-2">{card.value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {compliant.map((doc, index) => (
          <div
            key={index}
            className="bg-cardcontainer p-4 rounded-[16px] flex flex-col justify-between h-full"
          >
            <div className="relative">
              <img
                src={doc.comImg}
                alt=""
                className="rounded-md brightness-75"
              />
              <div
                className={`absolute top-1 right-1 py-1 px-2 rounded-full text-xs ${getColor(
                  doc.compliantCard
                )}`}
              >
                <p className="text-white flex gap-1 items-center">
                  <GoDotFill />
                  {doc.compliantCard}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p className="c-secondary text-base">{doc.title}</p>
              <div className="flex items-center gap-1">
                <p className="text-sm c-secondary mt-2">State:</p>
                <p className="text-sm c-secondary mt-2">{doc.state}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm c-secondary mt-2">Expires:</p>
                <p className="text-sm c-secondary mt-2">{doc.expire}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
