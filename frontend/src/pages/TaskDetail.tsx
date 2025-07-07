import { useState } from "react";

export default function TaskDetail() {
  const [status, setStatus] = useState("In Progress");
  const [file, setFile] = useState<File | null>(null);
  const [comment, setComment] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleCommentSubmit = () => {
    alert(`Comment submitted: ${comment}`);
    setComment("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 max-w-xl">
      <h2 className="text-xl font-semibold mb-2">Task: Build Login Page</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Description:
        </label>
        <p className="text-sm text-gray-800">
          Implement the login form UI and connect to auth API.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Status:
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option>Todo</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Due Date:
        </label>
        <p className="text-sm text-gray-800">April 20, 2025</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Attachment:
        </label>
        <input type="file" onChange={handleFileChange} className="text-sm" />
        {file && <p className="text-sm mt-1 text-blue-800">{file.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Comment:
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm"
          placeholder="Add your comment here"
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-2 text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700"
        >
          Submit Comment
        </button>
      </div>

      <div className="pt-4 border-t">
        <button className="text-sm text-red-600 hover:underline">
          Delete Task
        </button>
      </div>
    </div>
  );
}
