import React, { useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Mechanic Request",
      busNumber: "BUS-101",
      timeRequired: "2 hours",
      description: "Engine oil leakage, needs fixing.",
      status: "pending",
    },
    {
      id: 2,
      title: "Mechanic Request",
      busNumber: "BUS-205",
      timeRequired: "1.5 hours",
      description: "Brake pads replacement required.",
      status: "pending",
    },
  ]);

  const handleAction = (id, action) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: action } : n))
    );
  };

  return (
    <div className="p-5 mx-auto">
      <h2 className="c-secondary mb-5 text-xl font-semibold">Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        notifications.map((n) => (
          <div
            key={n.id}
            className="border border-main rounded-lg p-4 mb-4 bg-cardcontainer shadow-sm"
          >
            <h3 className="c-primary text-lg font-semibold mb-2">{n.title}</h3>
            <p className="c-secondary">
              <strong>Bus:</strong> {n.busNumber}
            </p>
            <p className="c-secondary">
              <strong>Time Required:</strong> {n.timeRequired}
            </p>
            <p className="c-secondary">
              <strong>Description:</strong> {n.description}
            </p>

            {n.status === "pending" ? (
              <div className="mt-3 flex gap-3">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  onClick={() => handleAction(n.id, "approved")}
                >
                  Approve
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  onClick={() => handleAction(n.id, "rejected")}
                >
                  Reject
                </button>
              </div>
            ) : (
              <p
                className={`mt-2 font-bold ${
                  n.status === "approved" ? "text-green-600" : "text-red-600"
                }`}
              >
                {n.status.toUpperCase()}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
}
