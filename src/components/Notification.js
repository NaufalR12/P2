import React from "react";
import "./Notification.css";

const icons = {
  success: "✅",
  error: "❌",
  info: "ℹ️",
};
const titles = {
  success: "Berhasil!",
  error: "Gagal!",
  info: "Info",
};

const Notification = ({ message, type = "info", onClose }) => {
  if (!message) return null;
  return (
    <div className={`notification notification-${type}`}>
      <div className="notification-content">
        <span className="notification-icon">{icons[type]}</span>
        <div className="notification-text">
          <div className="notification-title">{titles[type]}</div>
          <div className="notification-message">{message}</div>
        </div>
        <button className="notification-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;
