const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

const { bcryptConfig } = require("../config");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

// Indexes
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ role: 1 });
userSchema.index({ status: 1 });
userSchema.index({ role: 1, status: 1 }); // composite index
userSchema.index({ createdAt: -1 }); // for sorting by latest

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to omit sensitive fields from the response
userSchema.methods.toJSON = function () {
  const user = this.toObject(); // Converts Mongoose document to plain JavaScript object
  return _.omit(user, ["password", "__v"]);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
