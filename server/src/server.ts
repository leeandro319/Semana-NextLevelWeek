import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("listagem");
  response.json(["leandro", "cleiton", "robson"]);
});

app.listen(3333);
