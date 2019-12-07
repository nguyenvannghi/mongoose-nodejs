const mongoose = require("mongoose");
const { MONGO_URI } = require("../configs");
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
const db = mongoose.connection;
db.on("error", () => {
  console.log("\n");
  console.log("‍================ Error occurred from the database");
  console.log("\n");
  console.log(
    "========================================================================"
  );
});
db.once("open", () => {
  console.log("\n");
  console.log(
    "================⚡️  Connection to MongoDB is live. Database: " + db.name
  );
  console.log("\n");
});
module.exports = mongoose;
