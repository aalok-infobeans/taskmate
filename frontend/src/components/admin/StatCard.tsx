interface StatCardProps {
  label: string;
  value: number;
  color?: string;
}

export default function StatCard({
  label,
  value,
  color = "bg-blue-100",
}: StatCardProps) {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color}`}>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
