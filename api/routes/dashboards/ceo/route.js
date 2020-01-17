const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const json = require("./data");

  console.log("ceo", json);

  setTimeout(() => {
    res.json({ data: json });
  }, 250);
});

module.exports = router;
