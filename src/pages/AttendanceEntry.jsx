import React, { useState } from "react";
import axios from "axios";

const AttendanceEntry = ({ empId }) => {
  const [days, setDays] = useState("");

  const submitAttendance = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/attendance/add",
        {
          userId: empId,
          presentDays: days,
          month: "2024-03"
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      alert("Attendance recorded successfully ✅");
      setDays("");
    } catch {
      alert("Unable to update attendance");
    }
  };

  return (
    <div className="attendance-card">

      <h3>Attendance Update</h3>
      <p className="attendance-hint">
        Record employee attendance for the selected payroll month
      </p>

      <input
        type="number"
        className="attendance-input"
        placeholder="Number of working days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />

      <button className="btn attendance-btn" onClick={submitAttendance}>
        Save Attendance
      </button>

    </div>
  );
};

export default AttendanceEntry;
