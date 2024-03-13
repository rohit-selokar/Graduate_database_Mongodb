const express = require("express");
const app = express();
const port = 3000;

require("./db/connect");
const userRoutes = require("./routes/userRoutes");


app.use(express.json());
app.use(userRoutes);


app.listen(port, (req, res) => {
  console.log(`server is running on ${port}`);
});
