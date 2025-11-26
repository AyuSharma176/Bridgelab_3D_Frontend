import React from "react";

export default function StudentDetails({ student, onBack }) {
  if (!student) return null;
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Student Details</h2>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Section:</strong> {student.section}
      </p>
      <p>
        <strong>Marks:</strong> {student.marks}
      </p>
      <p>
        <strong>Grade:</strong> {student.grade}
      </p>

      <button className="btn back-btn" onClick={onBack}>
        Back
      </button>
    </div>
  );
}
