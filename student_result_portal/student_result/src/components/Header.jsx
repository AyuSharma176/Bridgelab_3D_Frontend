import React from "react";

export default function Header({ onMenuClick, title }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          className="btn load-btn"
          onClick={onMenuClick}
          aria-label="Open menu"
          style={{ padding: "10px 12px" }}
        >
          ☰
        </button>
        <h1 style={{ margin: 0, fontSize: 22 }}>{title}</h1>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{ color: "var(--text-muted)", fontSize: 14 }}>Monarch</div>
      </div>
    </header>
  );
}
