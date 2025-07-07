import { Link } from "react-router-dom";

interface TaskItemProps {
  title: string;
  dueDate: string;
}

export default function TaskItem({ title, dueDate }: TaskItemProps) {
  return (
    <Link to={`/tasks/1`}>
      <div className="bg-white shadow rounded-md px-4 py-2 hover:bg-blue-50 cursor-pointer">
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-gray-500">{dueDate}</div>
      </div>
    </Link>
  );
}
