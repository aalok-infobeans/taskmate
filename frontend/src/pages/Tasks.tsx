import TaskItem from "../components/tasks/TaskItem";

const tasks = {
  todo: [
    { title: "Create UI Design", dueDate: "Apr 10" },
    { title: "Write Requirements", dueDate: "Apr 15" },
  ],
  inProgress: [
    { title: "Build Login Page", dueDate: "Apr 20" },
    { title: "Set up Auth", dueDate: "Apr 22" },
  ],
  done: [
    { title: "Project Setup", dueDate: "Apr 5" },
    { title: "Sidebar Layout", dueDate: "Apr 6" },
  ],
};

export default function Tasks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Todo */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Todo</h2>
        <div className="space-y-2">
          {tasks.todo.map((task, idx) => (
            <TaskItem key={idx} {...task} />
          ))}
        </div>
      </div>

      {/* In Progress */}
      <div>
        <h2 className="text-lg font-semibold mb-2">In Progress</h2>
        <div className="space-y-2">
          {tasks.inProgress.map((task, idx) => (
            <TaskItem key={idx} {...task} />
          ))}
        </div>
      </div>

      {/* Done */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Done</h2>
        <div className="space-y-2">
          {tasks.done.map((task, idx) => (
            <TaskItem key={idx} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
}
