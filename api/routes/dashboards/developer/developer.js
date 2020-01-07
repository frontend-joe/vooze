const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const json = require("./developer.json");

  console.log("manager", json);

  setTimeout(() => {
    res.json({ data: json });
  }, 250);
});

module.exports = router;
