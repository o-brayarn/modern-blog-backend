import express from "express";

const app = express();
// Defining different endpoints
app.get("/hello", (req, res) => {
  res.send("Hello There!");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
