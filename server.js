const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

//app.use("./seeders/seed.js")(app);

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require("./routes/api-routes.js")(app);
require("./routes/controller.js")(app);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});