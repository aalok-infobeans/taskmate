const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
      index: true, // helps filter by status
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
      index: true, // helps filter/sort by priority
    },

    dueDate: {
      type: Date,
      index: true, // for sorting/filtering by deadline
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // for querying tasks created by a user
    },

    assignedTo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        index: true, // allows $elemMatch queries on assigned users
      },
    ],

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],

    attachments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attachment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// 🔁 Composite Index: for common dashboard query (e.g. by status + due date)
taskSchema.index({ status: 1, dueDate: 1 });

// Optional: Index for recently updated tasks
taskSchema.index({ updatedAt: -1 });

// Optional: Index for task list filtering (e.g. by assigned user + status)
taskSchema.index({ assignedTo: 1, status: 1 });

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
