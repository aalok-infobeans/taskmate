import UserTable from "../../components/admin/UserTable";

export default function AdminUsersPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin – User Management</h2>
      <UserTable />
    </div>
  );
}
