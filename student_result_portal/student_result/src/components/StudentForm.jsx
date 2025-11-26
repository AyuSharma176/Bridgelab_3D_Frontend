import React, { useState } from "react";

export default function StudentForm({ student, onCancel, onSave }) {
  const [name, setName] = useState(student ? student.name : "");
  const [section, setSection] = useState(student ? student.section : "");
  const [marks, setMarks] = useState(student ? student.marks : "");
  const [grade, setGrade] = useState(student ? student.grade : "");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    const m = Number(marks);
    if (marks === "" || Number.isNaN(m)) e.marks = "Marks required";
    else if (m < 0 || m > 100) e.marks = "Marks must be 0-100";
    if (!section.trim()) e.section = "Section required";
    if (!grade.trim()) e.grade = "Grade required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const payload = {
      id: student ? student.id : undefined,
      name: name.trim(),
      section: section.trim(),
      marks: Number(marks),
      grade: grade.trim(),
    };
    onSave(payload);
  };

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>
        {student ? "Edit Student" : "Add Student"}
      </h2>
      <form onSubmit={submit}>
        <input
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <div style={{ color: "var(--danger)", marginBottom: 8 }}>
            {errors.name}
          </div>
        )}

        <input
          placeholder="Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        {errors.section && (
          <div style={{ color: "var(--danger)", marginBottom: 8 }}>
            {errors.section}
          </div>
        )}

        <input
          placeholder="Marks (0-100)"
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        {errors.marks && (
          <div style={{ color: "var(--danger)", marginBottom: 8 }}>
            {errors.marks}
          </div>
        )}

        <input
          placeholder="Grade (A/B/C...)"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        {errors.grade && (
          <div style={{ color: "var(--danger)", marginBottom: 8 }}>
            {errors.grade}
          </div>
        )}

        <button type="submit" className="btn submit-btn">
          Save
        </button>
        <button
          type="button"
          className="btn cancel-btn"
          onClick={onCancel}
          style={{ marginTop: 10 }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
