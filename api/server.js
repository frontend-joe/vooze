const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

const settings = require("./routes/settings/settings");
const ceo = require("./routes/dashboards/ceo/route");
const manager = require("./routes/dashboards/manager/manager");
const developer = require("./routes/dashboards/developer/developer");
const designer = require("./routes/dashboards/designer/route");
const covid = require("./routes/dashboards/covid/route");

app.use(bodyParser.json());

app.use("/api/settings", settings);
app.use("/api/dashboards/ceo", ceo);
app.use("/api/dashboards/manager", manager);
app.use("/api/dashboards/developer", developer);
app.use("/api/dashboards/designer", designer);
app.use("/api/dashboards/covid", covid);
//
// app.get("/api/property-dashboard", (req, res) => {
//   const json = require("./propertyDashboard").data;
//   const data = JSON.parse(JSON.stringify(json));
//
//   setTimeout(() => {
//     res.json({ data });
//   }, 250);
// });

app.get("/api/geojson", (req, res) => {
  const json = require("@amcharts/amcharts4-geodata/json/region/world/worldRegionsLow.json");

  setTimeout(() => {
    res.json(json);
  }, 250);
});

if (process.env.NODE_ENV !== "development") {
  module.exports = app;
  module.exports.handler = serverless(app);
} else {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}
