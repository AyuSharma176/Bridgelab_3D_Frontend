import React from "react";

export default function StudentList({
  students,
  loading,
  onEdit,
  onDelete,
  onView,
  onLoad,
  onAdd, // ✅ NEW: dedicated add student handler
  query,
  setQuery,
  sortField,
  setSortField,
  sortDir,
  setSortDir,
  page,
  setPage,
  totalPages,
}) {
  return (
    <div className="card" style={{ paddingBottom: 20 }}>
      {/* ---------- TOP CONTROLS ---------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        {/* LEFT BUTTONS */}
        <div className="button-row">
          <button className="btn load-btn" onClick={onLoad}>
            Load Students
          </button>

          {/* FIXED: Add Student uses onAdd() */}
          <button className="btn add-btn" onClick={onAdd}>
            Add Student
          </button>
        </div>

        {/* RIGHT — SEARCH + SORT */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            height: "52px",
          }}
        >
          {/* Search */}
          <input
            placeholder="Search name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "220px",
              height: "52px",
              borderRadius: "8px",
              background: "var(--bg-input)",
              border: "1px solid var(--border-color)",
              color: "var(--text-main)",
              padding: "0 14px",
              fontSize: "14px",
            }}
          />

          {/* Sort dropdown */}
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            style={{
              height: "52px",
              background: "var(--bg-input)",
              border: "1px solid var(--border-color)",
              color: "var(--text-main)",
              padding: "12px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              outline: "none",
              fontSize: "14px",
              appearance: "none",
            }}
          >
            <option value="">Sort by</option>
            <option value="name">Name</option>
            <option value="marks">Marks</option>
            <option value="grade">Grade</option>
          </select>

          {/* Sort direction */}
          <button
            onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
            style={{
              height: "52px",
              background: "var(--primary)",
              color: "#fff",
              border: "none",
              padding: "12px 18px",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.25s",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            {sortDir === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>

      {/* ---------- TABLE + LOADING ---------- */}
      {loading ? (
        <div
          style={{
            padding: 30,
            textAlign: "center",
            color: "var(--text-muted)",
          }}
        >
          Loading...
        </div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Section</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    style={{ textAlign: "center", color: "var(--text-muted)" }}
                  >
                    No students found
                  </td>
                </tr>
              )}

              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.section}</td>
                  <td>{s.marks}</td>
                  <td>{s.grade}</td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn edit-btn"
                        onClick={() => onEdit(s)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn del-btn"
                        onClick={() => onDelete(s.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn view-btn"
                        onClick={() => onView(s)}
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ---------- PAGINATION ---------- */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 14,
              alignItems: "center",
            }}
          >
            <div style={{ color: "var(--text-muted)" }}>
              Page {page} / {totalPages}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                className="btn back-btn"
                onClick={() => setPage(Math.max(1, page - 1))}
              >
                Prev
              </button>
              <button
                className="btn load-btn"
                onClick={() => setPage(Math.min(totalPages, page + 1))}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
