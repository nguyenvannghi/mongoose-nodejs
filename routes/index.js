const apiRoute = require("./apis");

const init = server => {
  server.get("*", (req, res, next) =>{
    console.log("Request was made to: " + req.originalUrl);
    return next();
  });
  server.get("/", (req, res) => {
    res.send("Welcome");
  });
  server.use("/api", apiRoute);
};
module.exports = {
  init: init
};
