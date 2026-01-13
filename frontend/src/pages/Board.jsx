import { useEffect, useState } from "react";
import axios from "../api/axios";

const Board = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`/tasks/${id}`, { status });
    fetchTasks();
  };

  const columns = {
    pending: [],
    "in-progress": [],
    completed: [],
  };

  tasks.forEach((task) => {
    columns[task.status].push(task);
  });

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {Object.keys(columns).map((status) => (
        <div key={status} style={{ width: "30%" }}>
          <h3>{status.toUpperCase()}</h3>
          {columns[status].map((task) => (
            <div key={task._id} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
              {status !== "pending" && (
                <button onClick={() => updateStatus(task._id, "pending")}>←</button>
              )}
              {status !== "completed" && (
                <button onClick={() => updateStatus(task._id, "completed")}>→</button>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
