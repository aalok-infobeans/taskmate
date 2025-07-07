const express = require("express");
const router = express.Router();
const users = require("../../data/users");
router.get("/", async (req, res, next) => {
  res.setHeader("Content-type", "application/json");
  res.json({ users });
});

module.exports = router;
