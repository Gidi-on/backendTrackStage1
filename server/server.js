const express = require("express");
const port = 7000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
  console.log(req.body);
  res.json({
    slackUsername: "Aribaba",
    backend: true,
    age: 21,
    bio: "Aspiring pro dev.",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
