import StatCard from "../../components/admin/StatCard";
import TaskStatusChart from "../../components/admin/TaskStatusChart";
import TeamOverview from "../../components/admin/TeamOverview";

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Admin Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Total Users" value={12} />
        <StatCard label="Total Tasks" value={37} />
        <StatCard label="Tasks Completed" value={18} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TaskStatusChart />
        <TeamOverview />
      </div>
    </div>
  );
}
