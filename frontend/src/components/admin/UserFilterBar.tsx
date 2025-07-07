interface FilterBarProps {
  filters: {
    role: string;
    status: string;
    team: string;
  };
  setFilters: (filters: any) => void;
}

export default function UserFilterBar({ filters, setFilters }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select
        value={filters.role}
        onChange={(e) => setFilters({ ...filters, role: e.target.value })}
        className="border p-1 rounded"
      >
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        className="border p-1 rounded"
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <select
        value={filters.team}
        onChange={(e) => setFilters({ ...filters, team: e.target.value })}
        className="border p-1 rounded"
      >
        <option value="">All Teams</option>
        <option value="Alpha">Alpha</option>
        <option value="Beta">Beta</option>
        <option value="Gamma">Gamma</option>
      </select>
    </div>
  );
}
