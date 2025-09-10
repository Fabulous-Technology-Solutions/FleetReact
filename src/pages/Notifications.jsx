import React, { useState } from "react";

export default function Notifications() {
  // Dummy notifications (you can replace with API data)
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

  // Handle approve/reject
  const handleAction = (id, action) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, status: action } : n
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2 className="c-secondary" style={styles.header}>Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        notifications.map((n) => (
          <div key={n.id} style={styles.card}>
            <h3 className="c-primary">{n.title}</h3>
            <p className="c-secondary"><strong >Bus:</strong> {n.busNumber}</p>
            <p className="c-secondary"><strong>Time Required:</strong> {n.timeRequired}</p>
            <p className="c-secondary"><strong>Description:</strong> {n.description}</p>

            {n.status === "pending" ? (
              <div style={styles.actions}>
                <button
                  style={styles.approveBtn}
                  onClick={() => handleAction(n.id, "approved")}
                >
                  Approve
                </button>
                <button
                  style={styles.rejectBtn}
                  onClick={() => handleAction(n.id, "rejected")}
                >
                  Reject
                </button>
              </div>
            ) : (
              <p
                style={{
                  color: n.status === "approved" ? "green" : "red",
                  fontWeight: "bold",
                }}
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

// Simple inline styles
const styles = {
  container: {
    padding: "20px",
    margin: "auto",
  },
  header: {
    marginBottom: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
   
  },
  title: {
    marginBottom: "10px",
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
  approveBtn: {
    background: "green",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  rejectBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
