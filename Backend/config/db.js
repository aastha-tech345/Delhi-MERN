const mongoose = require("mongoose");

mongoose.connect("mongodb://hvd_user:hvd_user@localhost:27017/HVD", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.connect("mongodb://127.0.0.1:27017/HVD", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to the database!");
});
428