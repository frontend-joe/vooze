const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const json = require("./developer.json");

  console.log("developer", json);

  setTimeout(() => {
    res.json(json);
  }, 2500);
});

module.exports = router;
