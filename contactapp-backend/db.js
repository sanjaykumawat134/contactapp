const mongoose = require("mongoose");
// Database connection
mongoose.connect("mongodb://0.0.0.0:27017/contactapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
