const express = require('express');

const app = express();

app.get("/produtos", (req, res)=> {
   return res.json(["produto 1", "produto 2", "produto 3"]);
})

app.post("/produtos", (req, res)=> {
  return res.json(["produto 1", "produto 2", "produto 3", "produto 4"]);
})

app.put("/produtos/:id", (req, res)=> {
  return res.json(["produto 6", "produto 2", "produto 3", "produto 4"]);
});

app.patch("/produtos/:id", (req, res)=> {
  return res.json(["produto 6", "produto 7", "produto 3", "produto 4"]);
});

app.delete("/produtos/:id", (req,res)=> {
  return res.json(["produto 6", "produto 2", "produto 4", ]);
});

app.listen(3333);
