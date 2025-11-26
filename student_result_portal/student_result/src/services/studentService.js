const API = "http://localhost:3000/students";

export async function getStudents() {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to fetch students");
  return res.json();
}

export async function addStudent(student) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  if (!res.ok) throw new Error("Failed to add student");
  return res.json();
}

export async function updateStudent(student) {
  const res = await fetch(`${API}/${student.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  if (!res.ok) throw new Error("Failed to update student");
  return res.json();
}

export async function deleteStudent(id) {
  const res = await fetch(`${API}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete");
  return true;
}
