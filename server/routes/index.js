module.exports = app => {
  app.use("/api/coasters", require("./coaster.routes"));
  app.use("/api", require("./auth.routes"));
}