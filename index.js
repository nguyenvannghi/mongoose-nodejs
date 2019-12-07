const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require("./configs");
let routes = require("./routes");

const server = express();

server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
server.use(cors());

routes.init(server);

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
