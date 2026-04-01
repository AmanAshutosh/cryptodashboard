import React, { useState } from "react";
import "./Tasks.css";
import { Plus, Calendar, CheckCircle, Trash2, Clock } from "lucide-react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Analyze BTC Support Levels",
      date: "2026-04-05",
      booked: true,
    },
    {
      id: 2,
      text: "Review Binance P2P Merchant Application",
      date: "2026-04-10",
      booked: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask || !newDate) return;

    const item = {
      id: Date.now(),
      text: newTask,
      date: newDate,
      booked: false,
    };
    setTasks([item, ...tasks]);
    setNewTask("");
    setNewDate("");
  };

  const toggleBooked = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, booked: !t.booked } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="tasks-container">
      <header className="tasks-header">
        <h1>Task Manager</h1>
        <p>Create and sync tasks with your trading calendar.</p>
      </header>

      {/* FORM SECTION */}
      <div className="task-form-card">
        <form onSubmit={addTask} className="task-form">
          <input
            className="task-input input-main"
            type="text"
            placeholder="What needs to be done?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            className="task-input input-date"
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <button type="submit" className="btn-add-task">
            <Plus size={18} /> Add Task
          </button>
        </form>
      </div>

 
      <div className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task-item"
            style={{
              borderLeft: `5px solid ${task.booked ? "#4bbf73" : "#3b7ddd"}`,
            }}
          >
            <div className="task-left">
              <div
                className="check-icon"
                onClick={() => toggleBooked(task.id)}
                style={{ color: task.booked ? "#4bbf73" : "#dee2e6" }}
              >
                <CheckCircle
                  size={24}
                  fill={task.booked ? "#e7f8ee" : "none"}
                />
              </div>
              <div className="task-content">
                <div
                  className="task-text"
                  style={{
                    textDecoration: task.booked ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </div>
                <div className="task-date">
                  <Calendar size={12} /> {task.date}
                </div>
              </div>
            </div>

            <div className="task-right">
              {!task.booked ? (
                <button
                  onClick={() => toggleBooked(task.id)}
                  className="btn-book"
                >
                  <Clock size={14} /> Book on Calendar
                </button>
              ) : (
                <span className="booked-badge">BOOKED</span>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                className="btn-delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
