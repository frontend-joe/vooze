const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const json = require("./data.json");

  console.log("ceo", json);

  setTimeout(() => {
    res.json({ data: json });
  }, 400);
});

module.exports = router;
