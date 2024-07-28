import express from "express";

const app = express();
app.use(express.json());
// Defining different endpoints
let articlesInfo = [
  {
    name: "learn-react",
    upvotes: 0,
  },
  {
    name: "learn-node",
    upvotes: 0,
  },
  {
    name: "mongodb",
    upvotes: 0,
  },
];
app.put("/api/articles/:name/upvotes", (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((a) => a.name === name);

  if (article) {
    article.upvotes += 1;
    res.send(`${name} now has ${article.upvotes} upvotes`);
  } else {
    res.send("This ${name} does not exist");
  }
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
