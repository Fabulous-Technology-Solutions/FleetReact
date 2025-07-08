import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Collapse } from "@mui/material";
import { CheveronIcon, NavLinkBorder } from "../../CustomIcons";
import userimg from "../../assets/images/dummy-user.png";

export default function Sidebar({ lists }) {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-sidebar rounded-[16px] h-full flex flex-col border border-main">
      <div>
        <div className="flex justify-center h-[75px] p-4">
          <img
            onClick={() => navigate("#")}
            className="max-w-[120px] object-contain max-h-full cursor-pointer"
            src={logo}
            alt="img"
          />
        </div>
        <div className="flex items-center gap-4 px-4 pb-2">
          <img
            onClick={() => navigate("#")}
            className="size-12 max-w-12 rounded-full object-cover"
            src={userimg}
            alt="img"
          />
          <div className="w-[calc(100%-64px)]">
            <p className="uppercase text-[11px] font-medium c-primary">Admin</p>
            <p className="text-sm font-medium c-primary truncate">
              Sajid Khan
            </p>
          </div>
        </div>
      </div>
      <div className="h-[calc(100%-131px)] p-2">
        <div className="h-full overflow-y-auto">
          <div className="flex flex-col gap-2 h-full">
            {lists?.map((sublist, index) => {
              const list = sublist.list;
              return (
                <div key={index}>
                  <p className="text-xs font-semibold c-secondary ps-5">
                    {sublist.title}
                  </p>
                  <div className="flex flex-col gap-1 px-2 mt-2">
                    {list?.map((item, subitemindex) => {
                      const Icon = item.icon;
                      const isActive =
                        location.pathname.toLowerCase() ===
                          item.path.toLowerCase() ||
                        (item.activePath &&
                          item.activePath.some(
                            (p) =>
                              p.toLowerCase() ===
                              location.pathname.toLowerCase()
                          ));
                      return item.subItems ? (
                        <div key={subitemindex}>
                          <button
                            key={subitemindex}
                            onClick={() =>
                              toggleItem(`${sublist.title}-${subitemindex}`)
                            }
                            className={`flex items-center gap-2 justify-between p-2.5 rounded-[8px] w-full ${
                              isActive ? "c-inverted bg-navlink" : "c-secondary"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="text-xl" />
                              <p className="text-sm font-medium">
                                {item.label}
                              </p>
                            </div>
                            <CheveronIcon
                              className={`text-[8px] transition-transform duration-200 ${
                                openItems[`${sublist.title}-${subitemindex}`]
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                          <Collapse
                            in={openItems[`${sublist.title}-${subitemindex}`]}
                          >
                            <div className="ml-4 pl-2 border-l-2 border-[var(--csecondary)] flex flex-col gap-1 pt-2">
                              {item.subItems.map((subItem, subIndex) => {
                                const subPath = subItem.path;
                                const isSubActive =
                                  location.pathname.toLowerCase() ===
                                  subPath.toLowerCase();

                                return (
                                  <div
                                    className="relative"
                                    key={`${subitemindex}-${subIndex}`}
                                  >
                                    <Link
                                      to={subPath}
                                      className={`flex items-center gap-2 p-2.5 rounded-[8px] ${
                                        isSubActive
                                          ? "c-inverted bg-navlink"
                                          : "c-secondary"
                                      }`}
                                    >
                                      <p className="text-xs font-medium">
                                        {subItem.label}
                                      </p>
                                    </Link>
                                    <NavLinkBorder className="absolute top-1/2 translate-y-[-18px] text-[var(--csecondary)] left-[-14.5px] text-[18px]" />
                                  </div>
                                );
                              })}
                            </div>
                          </Collapse>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          key={subitemindex}
                          className={`flex items-center gap-2 p-2.5 rounded-[8px] ${
                            isActive ? "c-inverted bg-navlink" : "c-secondary"
                          }`}
                        >
                          <Icon className="text-xl" />
                          <p className="text-sm font-medium">{item.label}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {role === "CA" && <div className="p-2 mt-auto">
              <div className="bg-cardcontainer border border-main p-4 rounded-[28px] flex flex-col items-center ">
                <p className="c-primary font-primary text-base text-center">
                  Manage Your Plan
                </p>
                <p className="text-xs c-secondary text-center">
                  Upgrade, downgrade, or view billing details anytime.
                </p>
                <Link className="bg-navlink c-inverted p-3 w-full flex items-center justify-center text-center rounded-[12px] mt-3">
                  View Subscription
                </Link>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
