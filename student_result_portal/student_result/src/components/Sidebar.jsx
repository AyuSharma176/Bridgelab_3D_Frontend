import React from "react";

export default function Sidebar({ open, onClose, onNavigate }) {
  // Using inline styles so we don't modify your single CSS file.
  const base = {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: 260,
    padding: 20,
    background: "var(--bg-card)",
    borderRight: "1px solid var(--border-color)",
    transform: open ? "translateX(0)" : "translateX(-110%)",
    transition: "transform 280ms ease",
    zIndex: 1200,
    boxShadow: open ? "0 8px 40px rgba(0,0,0,0.6)" : "none",
  };

  const linkStyle = {
    display: "block",
    padding: "12px 14px",
    color: "var(--text-main)",
    textDecoration: "none",
    borderRadius: 8,
    marginBottom: 8,
  };

  return (
    <aside style={base}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <div
          style={{ fontWeight: 800, fontSize: 18, color: "var(--text-main)" }}
        >
          Dashboard
        </div>
        <button
          className="btn back-btn"
          onClick={onClose}
          style={{ padding: "8px 10px" }}
        >
          Close
        </button>
      </div>

      <nav>
        <a
          href="#students"
          style={linkStyle}
          onClick={() => onNavigate("list")}
        >
          Students
        </a>
        <a href="#add" style={linkStyle} onClick={() => onNavigate("add")}>
          Add Student
        </a>
        <a href="#about" style={linkStyle} onClick={() => onNavigate("about")}>
          About
        </a>
      </nav>

      <div style={{ marginTop: 20, color: "var(--text-muted)", fontSize: 13 }}>
        <div style={{ marginBottom: 8 }}>Quick tips</div>
        <div>- Use search for names</div>
        <div>- Sort columns to organize</div>
      </div>
    </aside>
  );
}
