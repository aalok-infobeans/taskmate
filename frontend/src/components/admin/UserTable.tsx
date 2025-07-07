import { useState } from "react";
import { mockUsers } from "../../data/users";
import UserRow from "./UserRow";
import UserFilterBar from "./UserFilterBar";
import UserFormModal from "./UserFormModal";

export default function UserTable() {
  const [users, setUsers] = useState(mockUsers);
  const [filters, setFilters] = useState({ role: "", status: "", team: "" });

  const [editingUser, setEditingUser] = useState<any | null>(null);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);

  const handleDeleteConfirmed = () => {
    if (deleteUserId) {
      setUsers((prev) => prev.filter((u) => u._id !== deleteUserId));
      setDeleteUserId(null);
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchRole = filters.role ? user.role === filters.role : true;
    const matchStatus = filters.status ? user.status === filters.status : true;
    const matchTeam = filters.team ? user.team === filters.team : true;
    return matchRole && matchStatus && matchTeam;
  });

  return (
    <div className="bg-white shadow rounded p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">User Management</h3>
        <button
          onClick={() => setEditingUser({})}
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
        >
          + Add User
        </button>
      </div>

      <UserFilterBar filters={filters} setFilters={setFilters} />

      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Team</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <UserRow
              key={user._id}
              user={user}
              onEdit={(user) => setEditingUser(user)}
              onDelete={(id) => setDeleteUserId(id)}
            />
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation */}
      {deleteUserId && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow text-center space-y-4">
            <p className="text-sm">
              Are you sure you want to delete this user?
            </p>
            <div className="space-x-2">
              <button
                onClick={handleDeleteConfirmed}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteUserId(null)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal – coming in next step */}
      {editingUser !== null && (
        <UserFormModal
          user={editingUser._id ? editingUser : undefined}
          onClose={() => setEditingUser(null)}
          onSave={(data, id) => {
            if (id) {
              setUsers((prev) =>
                prev.map((u) => (u._id === id ? { ...u, ...data } : u))
              );
            } else {
              const newUser = { ...data, _id: Date.now().toString() };
              setUsers((prev) => [...prev, newUser]);
            }
            setEditingUser(null);
          }}
        />
      )}
    </div>
  );
}
