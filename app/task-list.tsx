"use client";

import { useEffect, useState, type FormEvent } from "react";
import { getSupabase } from "./supabase-client";

type Task = {
  id: string;
  text: string;
  done: boolean;
};

// Row level security on the tasks table means these queries only ever
// return or change rows that belong to the signed-in user.
export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    getSupabase()
      .from("tasks")
      .select("id, text, done")
      .order("created_at", { ascending: true })
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setTasks(data ?? []);
        setLoading(false);
      });
  }, []);

  async function handleAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setBusy(true);
    setError(null);
    const { data, error } = await getSupabase()
      .from("tasks")
      .insert({ text: trimmed })
      .select("id, text, done")
      .single();
    if (error) setError(error.message);
    else {
      setTasks((prev) => [...prev, data]);
      setText("");
    }
    setBusy(false);
  }

  async function handleToggle(task: Task) {
    setError(null);
    const { error } = await getSupabase()
      .from("tasks")
      .update({ done: !task.done })
      .eq("id", task.id);
    if (error) setError(error.message);
    else {
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)),
      );
    }
  }

  async function handleDelete(task: Task) {
    setError(null);
    const { error } = await getSupabase()
      .from("tasks")
      .delete()
      .eq("id", task.id);
    if (error) setError(error.message);
    else setTasks((prev) => prev.filter((t) => t.id !== task.id));
  }

  return (
    <div className="task-panel">
      <form className="task-form" onSubmit={handleAdd}>
        <input
          type="text"
          aria-label="New task"
          placeholder="Review 20 flashcards"
          required
          maxLength={200}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" disabled={busy}>
          Add
        </button>
      </form>

      {error && (
        <p className="auth-error" role="alert">
          {error}
        </p>
      )}

      {loading ? (
        <p className="auth-status">Loading tasks…</p>
      ) : tasks.length === 0 ? (
        <p className="auth-message">No tasks yet.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.done ? "task-done" : undefined}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleToggle(task)}
                />
                <span>{task.text}</span>
              </label>
              <button type="button" onClick={() => handleDelete(task)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
