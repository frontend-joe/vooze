const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const json = require("./settings.json");

  setTimeout(() => {
    res.json({ data: json });
  }, 250);
});

router.put("/", (req, res) => {
  let json = require("./settings.json");

  console.log("settings update", req.body);

  json = Object.assign(json, req.body);

  console.log("settings json", json);

  setTimeout(() => {
    res.json(json);
  }, 250);
});

module.exports = router;
