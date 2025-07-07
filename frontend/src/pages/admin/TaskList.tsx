import { useState } from "react";
import type {
  TaskFormModal,
  TaskFormData,
} from "../../components/admin/TaskFormModal";
import { mockTasks } from "../../data/mockTasks";
export default function TaskList() {
  const [tasks, setTasks] = useState<TaskFormData[]>([mockTasks]);
  const [editingTask, setEditingTask] = useState<TaskFormData | null>(null);

  const handleSave = (data: TaskFormData, id?: string) => {
    if (id) {
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, ...data } : t))
      );
    } else {
      setTasks((prev) => [...prev, { ...data, _id: Date.now().toString() }]);
    }
    setEditingTask(null);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setEditingTask({} as TaskFormData)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        ➕ Add Task
      </button>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task._id} className="p-4 border rounded shadow">
            <div className="font-bold text-lg">{task.title}</div>
            <div className="text-sm">{task.description}</div>
            <div className="text-xs text-gray-500 mt-2">
              Status: {task.status} | Priority: {task.priority}
            </div>
            <div className="mt-2 flex gap-2">
              <button
                className="text-blue-600"
                onClick={() => setEditingTask(task)}
              >
                ✏️ Edit
              </button>
              <button
                className="text-red-600"
                onClick={() =>
                  setTasks((prev) => prev.filter((t) => t._id !== task._id))
                }
              >
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingTask && (
        <TaskFormModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={handleSave}
          users={[
            { id: "1", name: "Alice" },
            { id: "2", name: "Bob" },
          ]}
        />
      )}
    </div>
  );
}
