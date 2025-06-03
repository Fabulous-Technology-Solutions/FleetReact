import React from "react";
import truckimg from "../../assets/images/truck.png";
import {
  CarWashIcon,
  DriversIcon,
  GasIcon,
  OilIcon,
  RoutesIcon,
  TollIcon,
} from "../../CustomIcons";
import busimg from "../../assets/images/busimg.png";
import MapComponent from "../../Conponents/Dashboard/MapComponent";

export default function LiveMap() {
  const boxes = [
    { icon: GasIcon, title: "Gas", value: "$500" },
    { icon: OilIcon, title: "Oil", value: "$250" },
    { icon: CarWashIcon, title: "Wash", value: "$400" },
    { icon: TollIcon, title: "Toll", value: "$300" },
  ];

  const Vehicles = [
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Needs Check",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Delay",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Low Fuel",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "In Motion",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Active",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Charging",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Needs Check",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Delay",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Low Fuel",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "In Motion",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Active",
    },
    {
      img: busimg,
      title: "Noah Van",
      driver: "John Ellis",
      distance: "486 KM",
      status: "Charging",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-7 p-3 bg-cardcontainer rounded-[16px]">
          <div className="h-full rounded-[10px] min-h-[300px] overflow-hidden">
            <MapComponent />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-4">
          <div className="p-4 bg-cardcontainer rounded-[24px] flex flex-col">
            <div className="border-b border-main pb-2">
              <p className="c-primary text-sm font-semibold">BUS-204</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[10px] c-secondary font-light">Route</p>
                  <p className="text-xs font-medium c-primary">
                    Newark → Jersey City
                  </p>
                </div>
                <div>
                  <p className="text-[10px] c-secondary font-light">
                    Assigned Driver
                  </p>
                  <p className="text-xs font-medium c-primary">
                    Kimberly Mastrangelo
                  </p>
                </div>
                <div>
                  <p className="text-[10px] c-secondary font-light">ETA</p>
                  <p className="text-xs font-medium c-primary">
                    May 13, 2025 7:52 pm
                  </p>
                </div>
              </div>
              <div className="relative min-h-[130px]">
                <img
                  className="w-full h-full object-contain object-right absolute right-[-16px]"
                  src={truckimg}
                  alt="img"
                />
              </div>
            </div>
            <div className="mt-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
                {boxes.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-body rounded-[10px] border border-main"
                    >
                      <Icon className="text-[var(--catblue)] text-lg" />
                      <div>
                        <p className="text-[10px] c-secondary font-light">
                          {item.title}
                        </p>
                        <p className="text-xs font-medium c-primary">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="p-4 bg-cardcontainer rounded-[24px]">
            <div className="flex items-center gap-2 justify-between border-b border-main pb-2">
              <div>
                <p className="text-sm font-semibold c-primary">Live Tracking</p>
                <p className="text-[10px] c-secondary">39 Vehicles on Road</p>
              </div>
              <div>
                <button className="text-[var(--navlinkbg)] text-xs">
                  See All
                </button>
              </div>
            </div>
            <div className="mt-2 max-h-[300px] overflow-y-auto scroll-y-hidden">
              <div className="flex flex-col gap-2">
                {Vehicles.map((item, index) => {
                  const status = ["active", "in motion"].includes(
                    item.status.toLowerCase()
                  )
                    ? "1"
                    : item.status.toLowerCase() === "low fuel"
                    ? "2"
                    : item.status.toLowerCase() === "charging"
                    ? "3"
                    : item.status.toLowerCase() === "needs check"
                    ? "4"
                    : "5";
                  return (
                    <div
                      key={index}
                      className="p-2 bg-sidebar rounded-[10px] flex items-center gap-2 justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          className="size-10 max-w-10 rounded-[6px]"
                          src={busimg}
                          alt="img"
                        />
                        <div>
                          <p className="text-xs font-medium c-primary">
                            Noah Van
                          </p>
                          <div className="mt-1 flex flex-wrap items-center gap-y-1 gap-x-4">
                            <div className="flex items-center gap-1">
                              <DriversIcon className="c-secondary" />
                              <p className="text-[10px] font-light c-secondary">
                                John Ellis
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <RoutesIcon className="c-secondary" />
                              <p className="text-[10px] font-light c-secondary">
                                486 KM
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className={`inline-flex items-center gap-2 text-nowrap py-1 px-2 rounded-full  ${
                            status === "1"
                              ? "bg-[var(--bgsuccess)]"
                              : status === "2"
                              ? "bg-[var(--bgdanger)]"
                              : status === "3"
                              ? "bg-[var(--bgatblue)]"
                              : status === "4"
                              ? "bg-[var(--csecondary)]"
                              : "bg-[var(--bgwarning)]"
                          }`}
                        >
                          <div
                            className={`size-1.5 min-w-1.5 rounded-full  ${
                              status === "1"
                                ? "bg-[var(--csuccess)]"
                                : status === "2"
                                ? "bg-[var(--cdanger)]"
                                : status === "3"
                                ? "bg-[var(--catblue)]"
                                : status === "4"
                                ? "bg-[var(--cinverted)]"
                                : "bg-[var(--cwarning)]"
                            }`}
                          ></div>
                          <p
                            className={`text-xs font-medium ${
                              status === "1"
                                ? "text-[var(--csuccess)]"
                                : status === "2"
                                ? "text-[var(--cdanger)]"
                                : status === "3"
                                ? "text-[var(--catblue)]"
                                : status === "4"
                                ? "text-[var(--cinverted)]"
                                : "text-[var(--cwarning)]"
                            }`}
                          >
                            {item.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
