interface UserRowProps {
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
    team: string;
    status: string;
  };
  onEdit: (user: any) => void;
  onDelete: (id: string) => void;
}

export default function UserRow({ user, onEdit, onDelete }: UserRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-2">{user.name}</td>
      <td className="p-2">{user.email}</td>
      <td className="p-2 capitalize">{user.role}</td>
      <td className="p-2">{user.team}</td>
      <td className="p-2 capitalize">{user.status}</td>
      <td className="p-2 space-x-2">
        <button
          className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded"
          onClick={() => onEdit(user)}
        >
          Edit
        </button>

        <button
          className="bg-red-100 text-red-800 px-2 py-1 text-xs rounded"
          onClick={() => onDelete(user._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
