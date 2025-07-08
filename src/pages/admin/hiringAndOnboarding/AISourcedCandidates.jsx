import React, { useState } from "react";
import TableMui from "../../../components/TableMui";
import { statusStyles } from "../../../modules/helpers";
import { GoDotFill } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FiltersIcon } from "../../../CustomIcons";
import InterviewDetails from "../../../components/modals/InterviewDetails";

const AISourcedCandidates = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const data = [
    {
      id: 1,
      rank: 1,
      name: "John Ellis",
      email: "c.a.glasser@outlook.com",
      phone: "(814) 413-9191",
      status: "Scheduled",
      actions: "",
    },
    {
      id: 2,
      rank: 2,
      name: "Maria Khan",
      email: "alex941@outlook.com",
      phone: "(708) 813-8989",
      status: "Scheduled",
      actions: "",
    },
    {
      id: 3,
      rank: 3,
      name: "Leo Martinez",
      email: "j.e.dukes@aol.com",
      phone: "(843) 461-5941",
      status: "Pending",
      actions: "Send Scheduler Reject",
    },
    {
      id: 4,
      rank: 4,
      name: "Frances Swann",
      email: "lva838@outlook.com",
      phone: "(618) 474-9169",
      status: "Pending",
      actions: "Send Scheduler Reject",
    },
    {
      id: 5,
      rank: 5,
      name: "Lorri Warf",
      email: "autumn_phillps@aol.com",
      phone: "(303) 420-4261",
      status: "Rejected",
      actions: "", // No action listed
    },
    {
      id: 6,
      rank: 6,
      name: "Judith Rodriguez",
      email: "rodger913@aol.com",
      phone: "(503) 338-2573",
      status: "Rejected",
      actions: "", // No action listed
    },
    {
      id: 7,
      rank: 7,
      name: "Stephanie Nicol",
      email: "patricia651@outlook.com",
      phone: "(765) 322-1399",
      status: "Rejected",
      actions: "", // No action listed
    },
    {
      id: 8,
      rank: 8,
      name: "Iva Ryan",
      email: "k_pacheco@gmail.com",
      phone: "(303) 569-1279",
      status: "Rejected",
      actions: "", // No action listed
    },
  ];
  return (
    <div>
      <div className="pb-3">
        <button
          className="c-secondary flex gap-2 items-center"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeftLong /> Back
        </button>
      </div>
      <div className="mt-4 bg-sidebar border border-main rounded-[12px] overflow-hidden">
        <div className="flex gap-x-4 gap-y-2 flex-wrap items-center justify-between p-4">
          <p className="c-primary text-sm font-semibold">
            AI-Sourced Candidates
          </p>
          <div className="flex items-center gap-2 ms-auto flex-wrap justify-end">
            <button className="c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main">
              <span>Filters</span>
              <FiltersIcon className="text-lg" />
            </button>
          </div>
        </div>
        <div className="my-3">
          <TableMui
            loading={false}
            th={{
              rank: "Rank",
              name: "Candidate Name",
              email: "Email",
              phone: "Phone Number",
              resume: "Resume",
              status: "Status",
              action: "",
            }}
            td={data}
            customFields={[
              {
                name: "status",
                data: (value) => {
                  const styles = statusStyles[value] || {
                    text: "text-gray-400",
                    bg: "bg-gray-700",
                  };

                  return (
                    <div
                      className={`inline-flex gap-2 items-center rounded-full py-1 px-2 ${styles.text} ${styles.bg}`}
                    >
                      <GoDotFill />
                      {value}
                    </div>
                  );
                },
              },
              {
                name: "resume",
                data: (value, row) => {
                  return (
                    <div>
                      <button className="c-secondary flex gap-2 justify-center">
                        Document{" "}
                        <MdOutlineSimCardDownload className="text-xl" />
                      </button>
                    </div>
                  );
                },
              },
              {
                name: "action",
                data: (value, row) => {
                  return (
                    <div>
                      {row.status === "Scheduled" && (
                        <div className="flex justify-center">
                          <button className="c-secondary" onClick={() => setShow(true)}>
                            View Interview Details
                          </button>
                        </div>
                      )}
                      {row.status === "Pending" && (
                        <div className="flex justify-center gap-3">
                          <button className="text-sm font-semibold bg-navlink c-inverted p-2 rounded-[12px]">
                            Send Scheduler
                          </button>
                          <button className="text-sm font-semibold bg-[#F43F5E] c-inverted p-2 rounded-[12px]">
                            Reject
                          </button>
                        </div>
                      )}
                      {row.status === "Rejected" && (
                        <div className="flex justify-center">
                          <FaRegTrashAlt className="cursor-pointer text-lg" />
                        </div>
                      )}
                    </div>
                  );
                },
              },
            ]}
          />
        </div>
      </div>
      {
        show && <InterviewDetails show={show} onHide={() => setShow(false)} />
      }
    </div>
  );
};

export default AISourcedCandidates;
