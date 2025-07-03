export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Welcome + Stats */}
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Hello, Gaura!</h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <div className="text-sm text-gray-500">Assigned</div>
            <div className="text-xl font-bold">10</div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <div className="text-sm text-gray-500">Pending</div>
            <div className="text-xl font-bold">5</div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <div className="text-sm text-gray-500">Completed</div>
            <div className="text-xl font-bold">8</div>
          </div>
        </div>

        {/* Chart Section Placeholder */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Task Status</h2>
          <div className="h-32 bg-blue-200 rounded-md flex items-center justify-center text-blue-900">
            [Chart Placeholder]
          </div>
        </div>
      </div>

      {/* Task Sidebar */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Tasks</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span>Todo</span>
            <span>Apr 30</span>
          </li>
          <li className="flex justify-between">
            <span>In Progress</span>
            <span>May 10</span>
          </li>
          <li className="flex justify-between">
            <span>Due Date</span>
            <span>Apr 20</span>
          </li>
          <li>
            <div className="mt-2">
              <span className="text-gray-500">Attachment</span>
              <div className="text-xs text-blue-800">in-sample.jpg</div>
            </div>
          </li>
          <li>
            <button className="mt-2 text-red-600 hover:underline text-sm">
              Delete Task
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
