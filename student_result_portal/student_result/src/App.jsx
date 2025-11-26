import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService";

export default function App() {
  // UI
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState("list"); // list | add | edit | details
  const [selected, setSelected] = useState(null);

  // Data + UX
  const [allStudents, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search / Sort / Pagination
  const [query, setQuery] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  // computed filtered + sorted + paged
  const [visibleStudents, setVisibleStudents] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    computeVisible();
    // eslint-disable-next-line
  }, [allStudents, query, sortField, sortDir, page]);

  async function loadStudents() {
    try {
      setLoading(true);
      const data = await getStudents();
      setAllStudents(Array.isArray(data) ? data : []);
      setPage(1);
    } catch (err) {
      alert("Failed to load students");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // initial load
    loadStudents();
    // eslint-disable-next-line
  }, []);

  function computeVisible() {
    let arr = [...allStudents];

    // search
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      arr = arr.filter((s) => s.name.toLowerCase().includes(q));
    }

    // sort
    if (sortField) {
      arr.sort((a, b) => {
        const A = a[sortField];
        const B = b[sortField];
        if (typeof A === "string") {
          return sortDir === "asc" ? A.localeCompare(B) : B.localeCompare(A);
        } else {
          return sortDir === "asc" ? A - B : B - A;
        }
      });
    }

    // pagination
    const pages = Math.max(1, Math.ceil(arr.length / pageSize));
    setTotalPages(pages);
    const p = Math.max(1, Math.min(page, pages));
    setPage(p);
    const start = (p - 1) * pageSize;
    setVisibleStudents(arr.slice(start, start + pageSize));
  }

  async function handleAdd(student) {
    try {
      setLoading(true);
      await addStudent(student);
      await loadStudents();
      setView("list");
      setSelected(null);
    } catch (err) {
      alert("Failed to add");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(student) {
    try {
      setLoading(true);
      await updateStudent(student);
      await loadStudents();
      setView("list");
      setSelected(null);
    } catch (err) {
      alert("Failed to update");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this student?")) return;
    try {
      setLoading(true);
      await deleteStudent(id);
      await loadStudents();
    } catch (err) {
      alert("Failed to delete");
    } finally {
      setLoading(false);
    }
  }

  function openAdd() {
    setSelected(null);
    setView("add");
    setSidebarOpen(false);
  }

  function openEdit(s) {
    setSelected(s);
    setView("edit");
    setSidebarOpen(false);
  }

  function openDetails(s) {
    setSelected(s);
    setView("details");
    setSidebarOpen(false);
  }

  return (
    <>
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={(v) => {
          if (v === "add") openAdd();
          else if (v === "list") setView("list");
        }}
      />
      <div style={{ marginLeft: 0, transition: "margin-left 280ms ease" }}>
        <div className="container">
          <Header
            onMenuClick={() => setSidebarOpen(true)}
            title="Student Result Management"
          />

          {/* main content area */}
          {view === "list" && (
            <StudentList
              students={visibleStudents}
              loading={loading}
              onEdit={openEdit}
              onView={openDetails}
              onDelete={handleDelete}
              onLoad={loadStudents}
              onAdd={openAdd}
              query={query}
              setQuery={setQuery}
              sortField={sortField}
              setSortField={setSortField}
              sortDir={sortDir}
              setSortDir={setSortDir}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          )}

          {view === "add" && (
            <StudentForm
              student={null}
              onCancel={() => setView("list")}
              onSave={handleAdd}
            />
          )}

          {view === "edit" && selected && (
            <StudentForm
              student={selected}
              onCancel={() => setView("list")}
              onSave={handleUpdate}
            />
          )}

          {view === "details" && selected && (
            <StudentDetails student={selected} onBack={() => setView("list")} />
          )}
        </div>
      </div>
    </>
  );
}
