module.exports = app => {
  app.use("/api", require("./coaster.routes"));
}