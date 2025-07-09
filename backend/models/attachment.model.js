const mongoose = require("mongoose");

const attachmentSchema = new mongoose.Schema(
  {
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
      index: true, // Fast access to all attachments of a task
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // Useful for audit/logging who uploaded files
    },

    fileUrl: {
      type: String,
      required: true,
    },

    fileName: {
      type: String,
      required: true,
      trim: true,
    },

    fileType: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false }, // Only track upload time
  }
);

// Optional: Index for sorting latest attachments per task
attachmentSchema.index({ taskId: 1, createdAt: -1 });

const Attachment = mongoose.model("Attachment", attachmentSchema);
module.exports = Attachment;
