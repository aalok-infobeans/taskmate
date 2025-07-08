const dotenv = require("dotenv");
const colors = require("colors");
const users = require("../data/users");
const User = require("../models/user.model");
const connectDB = require("../config/db.config");
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
